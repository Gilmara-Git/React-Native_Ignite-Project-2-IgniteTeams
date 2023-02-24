import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Form, HeaderList, NumberOfPlayersPerTeam } from './styles';
import { useTheme } from 'styled-components/native';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { EmptyList } from '@components/EmptyList';
import { Button } from '@components/Button';

export const Players = () => {
  const { COLORS } = useTheme();
  const [ team, setTeam ] = useState('Team A');
  const [ players, setPlayers] =  useState([]);

  const handlePlayerRemove =()=>{
    console.log('I was clicked')
  }

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Group Name"
        subTitle="Add players and separate the teams"
      />
      <Form>
        <Input
          placeholder="Enter players' name"
          placeholderTextColor={COLORS.GRAY_300}
          autoCorrect={false}
        />

        <ButtonIcon 
          icon="add"/>
      </Form>

      <HeaderList> 
        <FlatList
          horizontal
          data={['Time A', 'Time B']}
          keyExtractor={item=> item}
          renderItem={({item})=> (
            <Filter 
              title={item}
              onPress={()=>setTeam(item)}
              isActive={item === team}
            />
          )
          
        }
        />

        <NumberOfPlayersPerTeam>
          {players.length}
        </NumberOfPlayersPerTeam>
      </HeaderList>

        <FlatList
          data={players}
          keyExtractor={item=>item}
          renderItem={({item})=>(
            <PlayerCard 
              playerName={item}
              onRemove={handlePlayerRemove}
              />
          )}
          ListEmptyComponent={()=>(
            <EmptyList 
              description="There are no players on this Team yet."
              onAdd={()=>{console.log("Add was clicked Players Component")}}
            />
            )}
          contentContainerStyle={[{paddingBottom: 100}, players.length === 0 && { flex: 1}] }
          showsVerticalScrollIndicator={false}
        />

        <Button 
          buttonText="Remove group"
          type="SECONDARY"
          />
    </Container>
  );
};
