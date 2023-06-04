import { useDispatch } from 'react-redux'
import { HeaderBlock, HeaderContainer, HeaderLink, HeaderTheme, ThemeButton } from './Header.styled'
import { toggleThemeAction } from '../../feature/themeList'

export const Header = () => {
  const dispatch = useDispatch()

  return (
    <HeaderBlock>
      <HeaderContainer>
        <HeaderLink to='/' >ToDo</HeaderLink>
        <HeaderLink to='/list/' >List</HeaderLink>
        <HeaderTheme>
          <ThemeButton onClick={() => dispatch(toggleThemeAction())}>toggle</ThemeButton>
        </HeaderTheme>
      </HeaderContainer>
    </HeaderBlock>
  )
}