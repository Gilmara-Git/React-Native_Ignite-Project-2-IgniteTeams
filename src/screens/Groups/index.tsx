import { Container } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { EmptyList } from '@components/EmptyList'
import { Button } from '@components/Button';

import  { useState } from 'react';
import { FlatList } from 'react-native';

export function Groups() {
  const [ groups, setGroups ] = useState<string[]>(['L8ters of the Night']);

  return (
    <Container>
      <Header/>
      <Highlight title='Groups' subTitle='play with your group'/>
      
      <FlatList
        data={groups}
        keyExtractor={item=>item}
        renderItem={({item})=> <GroupCard groupName={item}/>}
        ListEmptyComponent={()=> (
          <EmptyList 
            description="Please register a group to get started."/>)}
            contentContainerStyle={groups.length === 0 && { flex: 1}}
      />

          <Button
            buttonText="Create a new group"
            onPress={()=>{}}
          />
    
     
    </Container>
  );
}
