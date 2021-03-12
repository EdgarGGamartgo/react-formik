import styled from 'styled-components';

export const Input = styled.input`
  padding-left: ${props => props.theme.paddingLeft};
  margin-left:${props => props.theme.marginLeft};
  height: ${props => props.theme.height};
  width: ${props => props.theme.width};
  background-color: ${props => props.theme.backgroundColor}; 
  color: #555555;
`

export const Select = styled.select`
  padding-left: ${props => props.theme.paddingLeft};
  margin-left:${props => props.theme.marginLeft};
  height: ${props => props.theme.height};
  width: ${props => props.theme.width};
  background-color: ${props => props.theme.backgroundColor}; 
  color: #555555;
`;

Input.defaultProps = {
  theme: {
    paddingLeft: '1%',
    marginLeft: '6%',
    height: '5vh' ,
    width: '60%',
    backgroundColor: '#232323'
  }
}

Select.defaultProps = {
  theme: {
    paddingLeft: '1%',
    marginLeft: '6%',
    height: '5vh' ,
    width: '90%',
    backgroundColor: '#232323'
  }
}

export const OtherInput = {
    paddingLeft: '1%',
    marginLeft: '6%',
    height: '5vh' ,
    width: '90%',
    backgroundColor: '#232323'
};