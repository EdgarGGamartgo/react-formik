import styled from 'styled-components'
import { Search } from '@styled-icons/zondicons/Search'

export const DetailsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-left: 40px;
    height: 24vh;
`

export const ImgDetailsContainer = styled.div`
    margin-right: 50px;
`

export const ImgDetails = styled.img`
    display: inline;
    width: 100%;
    height: 100%;
`

export const ParDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const DetailsTitle = styled.p`
    color: #F65261;
    margin-bottom: 1px;
`

export const DetailsSubTitle = styled.p`
    color: white;
    margin-bottom: 1px;
    font-size: 7px;
`

export const DetailsSpan = styled.span`
    color: #F65261;
    margin-bottom: 1px;
`

export const CircleWithText = styled.span`
    margin-left: 10px;
    width: 25px;
    height: 25px;
    line-height: 12px;
    border-radius: 50%;
    color: green;
    text-align: center;
    background: #000;
    border: 1px solid white;
    text-align: center;
    
`

export const HeaderSearchIcon = styled(Search)`
        transform: rotate(100deg); 
        float: right;
        marginRight: 25px;
        &:hover {
            cursor: pointer;
        }
`;