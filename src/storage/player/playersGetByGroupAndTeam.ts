import { playerGetByGroup } from "./playersGetByGroup";

export const playersGetByGroupAndTeam = async(group:string, team: string)=>{
   try{
    console.log(group, team, 'linha4')
    const storage = await playerGetByGroup(group);
    console.log(storage, 'players')
    const players = storage.filter(player => player.team === team);
    console.log(players, 'filterdPlayers')
    return players;

 }catch(error){
    console.log(error)
 }

}