import { useState, useEffect, useRef } from "react";
import { FlatList, Alert, TextInput } from "react-native";
import { Container, Form, HeaderList, NumberOfPlayersPerTeam } from "./styles";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '@screens/Groups';
import { useRoute } from '@react-navigation/native';

import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerRemoveByGroupTeam } from '@storage/player/playerRemoveByGroupTeam';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';
import { AppError } from "@utils/AppError";

import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Loading } from '@components/Loading';
import { Highlight } from "@components/Highlight";
import { EmptyList } from "@components/EmptyList";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from "@components/PlayerCard";

type PlayersRootParams = {
     group: string;
 
};

type PlayersProps  =  {
  navigation: NativeStackNavigationProp<RootParamList, 'players'>
}

export const Players = ({ navigation }: PlayersProps) => {
  
  const  { params }  = useRoute();
  const { group } = params as PlayersRootParams;

  const [isLoading, setIsLoading ] = useState(true);
  const [team, setTeam] = useState("Time A");
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const groupRemove = async ()=>{
    try{
      await groupRemoveByName(group);
      navigation.navigate('groups'); 

    }catch(error){
      console.log(error)
      Alert.alert('It was not possible to remove group.')
    }
  }

  const handleGroupRemove = ()=>{
    Alert.alert('Remove Group ?', 
            `Do you want to delete ${group.toUpperCase()} and its players ?`,
            [ { text: 'No', style: 'cancel'}, 
              { text: 'Yes', onPress:()=>groupRemove()}]
    )  
  }


const playerRemove = async(playerName: string)=>{
  try {

    await playerRemoveByGroupTeam(group, playerName);
    fetchPlayersByTeam();

  } catch (error) {
    console.log(error);
    Alert.alert(`It was not possible to remove ${playerName.toUpperCase()}`);
  }
}

  const handlePlayerRemove = async (playerName: string)=> {

    Alert.alert('Remove Player',`Do you want to remove ${playerName.toUpperCase()} from this group ?`, [
      {text: 'No', style: 'cancel'}, { text: 'Yes', onPress: ()=> playerRemove(playerName)}
    ])

   
  }

  const handlePlayerAdd = async () => {
    if (playerName.trim().length === 0) {
      return Alert.alert("Blank Name", "Please enter a player name!");
    }
    const newPlayer = {
      name: playerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
        setPlayerName('');
        newPlayerNameInputRef.current?.blur();

        fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Failed", error.message);
      } else {
        console.log(error);
        Alert.alert("It was not possible to add the player.");
      }
    }
  };

    
  const fetchPlayersByTeam = async () => {
    try{
        setIsLoading(true);
        const playersByTeam = await playersGetByGroupAndTeam(group, team);     
        setPlayers(playersByTeam);
        
      }catch(error){
        console.log(error)
        Alert.alert('Players per Team', 'There was a problem loading the players')
      }
      finally{
      setIsLoading(false);

    }

  };



  useEffect(()=>{
    fetchPlayersByTeam(); 
  },[team]);


  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subTitle="Add players and separate the teams" />
      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Enter players' name"          
          autoCorrect={false}
          onChangeText={setPlayerName}
          value={playerName}
          onSubmitEditing={handlePlayerAdd}
          returnKeyType="done"
        />

        <ButtonIcon icon="add" onPress={handlePlayerAdd} />
      </Form>

    
      <HeaderList>
        <FlatList
          horizontal
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              onPress={() => setTeam(item)}
              isActive={item === team}
            />
          )}
        />

        <NumberOfPlayersPerTeam>{players.length}</NumberOfPlayersPerTeam>
      </HeaderList>

      { 
      isLoading 
      ? 
      
      <Loading/> 
      
      : 

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard playerName={item.name} onRemove={()=>handlePlayerRemove(item.name)} />
        )}
        ListEmptyComponent={() => (
          <EmptyList
            description="There are no players on this Team yet."
            onAdd={handlePlayerAdd}
          />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
        showsVerticalScrollIndicator={false}
      />
      }

      <Button 
        onPress={handleGroupRemove}
        buttonText="Remove group"  
        type="SECONDARY" />
    </Container>
  );
};
