import React, {FC} from 'react'
import {Button, Text} from 'react-native'
import {InputNumber, FullWidthButton} from '../../../styles'
import {ButtonsContainer, SelectNumberCard} from '../style'
import colors from '../../../constants/colors'
import MainButton from '../../../components/MainButton'

interface Props {
    onChangeText: (input:string)=>void,
    resetInput: ()=>void,
    confirmInput:()=>void,
    enteredValue: string,
}

const NumberSelector : FC<Props> = ({onChangeText,resetInput, confirmInput, enteredValue}) => {
    return(
        <SelectNumberCard>
            <Text>Selecione um número:</Text>
            <InputNumber onChangeText={(text)=>{onChangeText(text)}} value={enteredValue}/>
            <ButtonsContainer>
                <FullWidthButton color={colors.accent} title="Corrigir" onPress={resetInput}/>
                <FullWidthButton color={colors.primary} title="Confirmar" onPress={confirmInput}/>
            </ButtonsContainer>
        </SelectNumberCard>
    )
}

export default NumberSelector