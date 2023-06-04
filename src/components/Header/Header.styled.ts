import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Theme } from '../../models/theme'

export const HeaderBlock = styled.header<{ theme: Theme }>`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
    display: flex;
    align-items: center;
`

export const HeaderContainer = styled.div`
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const HeaderLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    color: #fff;

    &.active {
        color: #ffffff33;
    }
}
`

export const HeaderTheme = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
`

export const ThemeButton = styled.button``