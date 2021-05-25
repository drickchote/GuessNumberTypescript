import React,{FC, ReactFragment} from 'react';
import {ButtonContainer, Text, TouchableOpacity} from './style';
import Colors from '../../constants/colors';

interface Props{
    onPress:()=>void,
    children: ReactFragment,
}

const MainButton: FC<Props> = ({onPress, children}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <ButtonContainer>
                <Text>{children}</Text>
            </ButtonContainer>
        </TouchableOpacity>
    )
}


export default MainButton;