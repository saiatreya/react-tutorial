import styled from 'styled-components';

const Button = styled.button`
    padding: 12px;
    text-align: center;
    background-color: blue;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid transparent;
    &:hover {
        background-color: lightblue;
        color: #111;
    }
`;

export default Button;