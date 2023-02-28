import AsyncStorage from "@react-native-async-storage/async-storage";
import  { PLAYER_COLLECTION }  from '@storage/storage.config';
import { PlayerStorageDTO }  from '@storage/player/PlayerStorageDTO';
import { playerGetByGroup } from "./playersGetByGroup";
import { AppError}  from '@utils/AppError';

export const playerAddByGroup = async ( newPlayer: PlayerStorageDTO, group: string)=> {
    console.log(newPlayer);
     
    try{
        const storedPlayers = await playerGetByGroup(group);
        const newPlayersExists = storedPlayers.filter(player => player.name === newPlayer.name)
        
        if(newPlayersExists.length > 0){
            throw new AppError('This person already exists in one of the Teams!')
        }

        const storage = JSON.stringify([...storedPlayers, newPlayer]);

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage )

    }catch(error){
        throw error;
    }




}