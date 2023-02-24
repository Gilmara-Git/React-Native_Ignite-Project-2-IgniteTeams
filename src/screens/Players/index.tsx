import { Container, Form, HeaderList, NumberOfPlayersPerTeam } from './styles';
import { useTheme } from 'styled-components/native';
import { FlatList } from 'react-native';
import { Header } from '@components/Header';
import { useState } from 'react';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter'

export const Players = () => {
  const { COLORS } = useTheme();
  const [ team, setTeam ] = useState('Team A');
  const [ players, setPlayers] =  useState([]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Group Name"
        subTitle="Add players and separate the teams"
      />
      <Form>
        <Input
          placeholder="Participant's name"
          placeholderTextColor={COLORS.GRAY_100}
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

    </Container>
  );
};
