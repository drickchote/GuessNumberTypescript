import React, {FC} from 'react'
import {Text} from 'react-native'
import {BoldText, TitleContainer} from '../../../styles'


const Title : FC = () => {
    return(
        <TitleContainer>
            <BoldText>Começar novo jogo</BoldText>
        </TitleContainer>
    )
}

export default Title
