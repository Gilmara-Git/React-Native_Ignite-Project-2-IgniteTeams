import { useState, useEffect, useRef } from "react";
import { FlatList, Alert, TextInput } from "react-native";
import { Container, Form, HeaderList, NumberOfPlayersPerTeam } from "./styles";


import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerRemoveByGroupTeam } from '@storage/player/playerRemoveByGroupTeam';
import { AppError } from "@utils/AppError";

import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from "@components/PlayerCard";
import { EmptyList } from "@components/EmptyList";

type PlayersRootParams = {
  route: {
    params: {
      group: string;
    };
  };
};

export const Players = ({
  route: { params },
}: PlayersRootParams): JSX.Element => {



  const { group } = params;

  const [team, setTeam] = useState("Time A");
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState<PlayerStorageDTO[] | undefined>([]);

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const handlePlayerRemove = async(playerName: string) => {
    try{
      await playerRemoveByGroupTeam(group, playerName);
      fetchPlayersByTeam();

    }catch(error){
      console.log(error)
      Alert.alert(`It was not possible to remove ${playerName}`)
    }  
  };

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
     
      const playersByTeam = await playersGetByGroupAndTeam(group, team);     
      setPlayers(playersByTeam)


    }catch(error){
      console.log(error)
      Alert.alert('Players per Team', 'There was a problem loading the players')
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

        <NumberOfPlayersPerTeam>{players?.length}</NumberOfPlayersPerTeam>
      </HeaderList>

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
          players?.length === 0 && { flex: 1 },
        ]}
        showsVerticalScrollIndicator={false}
      />

      <Button buttonText="Remove group" type="SECONDARY" />
    </Container>
  );
};
