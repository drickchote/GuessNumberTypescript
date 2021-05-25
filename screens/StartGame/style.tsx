import styled from 'styled-components/native'
import colors from '../../constants/colors'
import {Card, RowContainer} from '../../styles'

export const Screen = styled.View`
    flex: 1;
    padding: 10px;
    align-items: center;
`

export const ButtonsContainer = styled(RowContainer)`
    padding-top: 20px;
`

export const SelectNumberCard = styled(Card)`
    align-items: center;
    width: 80%;
    max-width: 95%;
    min-width: 300px;
    align-items: center;
`

export const ChosenNumberCard = styled(Card)`
    margin-top: 20px;
    align-items: center;
`

export const NumberContainer = styled.View`
        padding: 10px;
        border-color: ${colors.accent};
        border-width: 2px;
        border-radius: 10px;
        margin-vertical: 10px;
        align-items:center;
`

export const NumberText = styled.Text`
    color:${colors.accent};
    fontSize: 20px;
}
`

