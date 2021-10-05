import styled from 'styled-components';

const LeftNav = styled.section`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    background: #333;
    width: 20%;
    border: 2px solid #333;
    box-shadow: -10px 0px 10px 10px #333;
    a {
        color: #fff;
        text-decoration: none;
        padding: 5px;
        display: block;
        &:hover {
            background: white;
            color: #111;
        }
    }
`

export default LeftNav;