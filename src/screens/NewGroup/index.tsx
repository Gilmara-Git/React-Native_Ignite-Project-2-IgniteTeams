import { useState } from 'react';
import { Container, GroupIcon, Content  } from './styles';
import { Alert } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useTheme } from 'styled-components/native';
import { RootParamList } from '@screens/Groups';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import {  groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';

type Props = {
    navigation: NativeStackNavigationProp<RootParamList, 'new'>
}


export const NewGroup =( { navigation }: Props)=>{
    const [ groupName , setGroupName ]  = useState('');
   
    const handleNew = async ()=>{
        try {
            if(groupName.trim().length === 0){
                return Alert.alert('Blank not allowed', 'Please enter a group name!')
            }

            await groupCreate(groupName);
            navigation.navigate('players', { group: groupName}); 

        }catch(error){
            if(error instanceof AppError ){
                Alert.alert('New Group creation error!', error.message);
                console.log(error)
                
            }
        }
        }
    
    const { COLORS } = useTheme();
    return (
      
            <Container>
            <Header showBackButton/>
            <Content>
                <GroupIcon/>
                <Highlight title="New Group" subTitle="Create a group to add players"/> 
                <Input 
                    placeholder="Type your group name"
                    placeholderTextColor={COLORS.GRAY_300}
                    onChangeText={setGroupName}
                    value={groupName}
                
                />
                <Button 
                    buttonText="Create"
                    style={{marginTop: 20}}
                    onPress={handleNew}
                    />
            </Content>
            </Container>
      
    )
}