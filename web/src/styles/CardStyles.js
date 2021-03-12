import styled from 'styled-components'

export const CardIconContainer = styled.div`
    position: absolute;
    top: 8px;
    right: 6px;
`

export const CardTooltipContainer = styled.div`
    position: absolute;
    top: 8px;
    right: 6px;
    background-color: #232323;
    color: #FFFFFF;
    height: 5vh;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const CardTooltipItem = styled.label`
    padding-left: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
    background-color: #232323;
    &:hover {
            background-color: #F65261;
            cursor: pointer;
        }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    position: relative;
    margin: 10px;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
    width: 30%;
    &:hover {
            cursor: pointer;
        }
`
export const CardImg = styled.img`
    width: 100%;
    height: 50vh;
`

export const CardText = styled.div`
    padding: 0 20px 20px;
    color: #555555;
`

export const ReleaseDate = styled.span`
    float: right;
    padding-right: 10px;
    padding-left: 10px;
    border: solid #555555;
    border-width: thin;
`
