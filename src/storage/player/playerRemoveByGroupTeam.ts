import { playerGetByGroup } from '@storage/player/playersGetByGroup';
import { PLAYER_COLLECTION } from '@storage/storage.config';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const  playerRemoveByGroupTeam = async (group:string, playerName: string)=>{
    try {
        const storage = await playerGetByGroup(group);       
        const updatedPlayers = storage.filter(player => player.name !== playerName);
        const players = JSON.stringify(updatedPlayers);
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players )

    }catch(error){
        throw error;
    }
}