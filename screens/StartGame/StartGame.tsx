import React, {FC, useState} from 'react'
import {Dimensions,Alert, Keyboard} from 'react-native'
import {Screen} from './style'
import NumberSelector from "./presentation/NumberSelector"
import Title from './presentation/Title'
import ChosenNumber from './presentation/ChosenNumber'

const StartGame : FC = ()=>{

    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber]= useState<number | null>(null);
    
    const [width, setWidth] = useState(Dimensions.get('window').width)
    const [height, setHeight] = useState(Dimensions.get('window').height)

    const updateDimesions = () => {
        setWidth(Dimensions.get('window').width)
        setHeight(Dimensions.get('window').height)
    }
    
    Dimensions.addEventListener('change',updateDimesions)


    const numberInputHandler = (inputText : string) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ""));
    };

    const resetInputHandler = () => {
        setEnteredValue("");
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
        Alert.alert(
            "Invalid Number",
            "Number has to be a number between 1 and 99.",
            [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
        );
        return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue("");
        Keyboard.dismiss();
    };

    let confirmedOutput;

  if (confirmed) {
    confirmedOutput = <ChosenNumber chosenNumber={selectedNumber}/>
  }

    return (
        <Screen>
            <Title/>
            <NumberSelector enteredValue={enteredValue} onChangeText={numberInputHandler} resetInput={resetInputHandler } confirmInput={confirmInputHandler}/>
            {confirmedOutput}
        </Screen>
    )
}

export default StartGame