import React, {FC} from 'react'
import {Text} from 'react-native'
import MainButton from '../../../components/MainButton'
import { InputNumber} from '../../../styles'
import { NumberContainer, NumberText,ChosenNumberCard } from '../style'

interface Props{
    chosenNumber: number | null
}

const ChosenNumber : FC<Props> = ({chosenNumber}) => {
    return(
        <ChosenNumberCard>
            <Text>Numero Selecionado:</Text>
            <NumberContainer>
                <NumberText>{chosenNumber}</NumberText>
            </NumberContainer>
            <MainButton onPress={()=>{}}><Text>Começar</Text></MainButton>

        </ChosenNumberCard>
    )
}

export default ChosenNumber