import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storage.config';
import { groupGetAll } from '@storage/group/groupGetAll';

export const groupRemoveByName = async(groupToDelete: string)=>{
    
    try{
    
        const storage = await groupGetAll();           
        const filteredGroups = storage.filter(group => group !== groupToDelete);              
        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filteredGroups));
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupToDelete}`)

    }catch(error){
        throw error;
    }
}