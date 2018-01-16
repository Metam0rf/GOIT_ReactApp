
import styled from 'styled-components';

const StyledButton = styled.button`
    display: inline-block;
    color: black;
    /* background-color: ${props => props.delete ? `#00bcd4` : `#008ba3`}; */
    background-color: #008ba3;
    line-height: 1.6em
    font-size: 2em;
    box-shadow: 0 2px 2px black; 
    font-weight: 500;
    padding: 0 10px;
    text-align: center;
    border: 1px solid black; 
`;

export default StyledButton;