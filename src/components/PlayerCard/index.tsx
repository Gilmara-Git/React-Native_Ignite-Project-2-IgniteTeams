import  { Container, PlayerIcon, PlayerName} from './styles';
import { ButtonIcon } from '@components/ButtonIcon';

type PlayerCardProps = {
    playerName: string;
    onRemove: ()=> void;
}

export const PlayerCard =({playerName, onRemove}: PlayerCardProps)=>{
    return (
        <Container>
            <PlayerIcon 
                name="person" />
            
            <PlayerName>
                {playerName}
            </PlayerName>
            
            <ButtonIcon 
                icon="close" 
                type="SECONDARY"
                onPress={onRemove}
                />
        </Container>
    )
}