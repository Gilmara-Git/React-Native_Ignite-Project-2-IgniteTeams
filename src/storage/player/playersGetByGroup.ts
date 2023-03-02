// We are going to get the players by group
import { PLAYER_COLLECTION } from "@storage/storage.config";
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO} from '@storage/player/PlayerStorageDTO';


export const playerGetByGroup = async (group: string)=>{
    try{
        const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);

        const players : PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];
            
        return players;

    }catch(error){
        throw error;

    }
}