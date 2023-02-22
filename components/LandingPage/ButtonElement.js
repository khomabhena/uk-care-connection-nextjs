import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? `var(--primaryDark)`: `var(--primary)`)};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px': '12px 38px')};
    color: ${({ dark }) => (dark ? '#ffffff' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '1.1rem')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? `var(--primary)` : `var(--primary)`)};
        
    }
`