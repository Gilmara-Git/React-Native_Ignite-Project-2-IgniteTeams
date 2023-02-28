import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storage.config";
import { groupGetAll } from "./groupGetAll";
import { AppError } from '@utils/AppError';

export const groupCreate = async (newGroup: string) => {
  try {
    const storedGroups = await  groupGetAll();
    const isGroupAlreadyCreated = storedGroups.includes(newGroup);

    if(isGroupAlreadyCreated){
      throw new AppError(`A group with the name ${newGroup} already exists!`)
    }
    
    const storage = JSON.stringify([...storedGroups, newGroup]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    
  } catch (error) {
    throw error;
  }
};
