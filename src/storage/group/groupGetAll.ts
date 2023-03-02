import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storage.config';

export const groupGetAll = async ()=>{
    try{
        const storage =  await AsyncStorage.getItem(GROUP_COLLECTION);
     
        let groupCollection: string[] = storage ? JSON.parse(storage) : []; 
            
        return groupCollection;
    }catch(error){
        throw error;
    }
}