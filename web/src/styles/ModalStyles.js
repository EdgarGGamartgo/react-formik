import styled from 'styled-components'

export const ModalContainer = styled.div`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
`

export const ModalBodyContent = styled.div`
    background-color: #232323;
    margin: auto;
    padding: 20px;
    border: 1px solid #232323;
    width: 40%;
`

export const CloseButton = styled.span`
    color: #FFFFFF;
    float: right;
    font-size: 50px;
    font-weight: normal;
    &:hover {
            cursor: pointer;
        }
`

export const ButtonsContainer = styled.div`
    float: right;
    margin-right: 2%;
    margin-top: 6%;
    height: '15vh'; 
` 

export const SubmitButton = styled.button`
    margin-right: 0;
    height: 6vh;
    width: 100px;
    background-color: #F65261;
    border: none;
    color: #FFFFFF;
`

export const ResetButton = styled.button`
    margin-right: 20px;
    height: 6vh;
    width: 100px;
    background-color: #232323;
    border: solid #F65261;
    color: #F65261;
    border-width: thin;
`

