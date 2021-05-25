import styled from "styled-components/native"


export const BoldText = styled.Text`
    font-weight: bold;
    font-size: 24px;
`

export const TitleContainer = styled.View`
    align-items: center;
    width: 100%;
    padding: 20px;
`

export const InputNumber = styled.TextInput.attrs(()=>({
    keyboardType: "numeric"
}))`
    border-bottom-width: 1px;
`

export const Card = styled.View`
    shadow-radius: 6px;
    shadow-opacity: 0.26;
    background-color: white;
    elevation: 5;
    padding: 20px;
`

export const RowContainer = styled.View`
    flex-direction: row
`

export const FullWidthButton = styled.Button`
    width: 40%
`