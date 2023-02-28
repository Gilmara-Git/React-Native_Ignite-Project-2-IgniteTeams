import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import  { useState , useCallback } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { EmptyList } from '@components/EmptyList'
import { Button } from '@components/Button';
import {  groupGetAll } from '@storage/group/groupGetAll';

export type RootParamList =  {
  groups: undefined;
  new: undefined;
  players: {
      group: string;
  }
}

type Props = {
  navigation: NativeStackNavigationProp<RootParamList, 'groups'>
};

export function Groups({ navigation }: Props) {
  const [ groups, setGroups ] = useState<string[]>([]);

  const handleOpenGroup =( group: string)=>{
     navigation.navigate('players', {group} )
  }
  
  const handleNewGroup=()=>{
   navigation.navigate('new')
  }

  const fetchGroups = async ()=>{
    try{
      const groupsData = await groupGetAll();      
      setGroups(groupsData);

    }catch(error){
      console.log(error);
    }
  }


    useFocusEffect(useCallback(()=>{
      fetchGroups();

    }, []))


  return (
    <Container>
      <Header/>
      
      <Highlight title='Groups' subTitle='play with your group'/>
      
      <FlatList
        data={groups}
        keyExtractor={item=>item}
        renderItem={({item})=> 
          <GroupCard 
            groupName={item}
            onPress={()=>handleOpenGroup(item)}
          />}
        contentContainerStyle={groups.length === 0 && { flex: 1}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=> (
          <EmptyList 
            onAdd={handleNewGroup}
            description="Please register a group to get started."/>)}
      />

          <Button
            buttonText="Create a new group"
            onPress={handleNewGroup}
          />
    
     
    </Container>
  );
}
