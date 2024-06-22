import { MouseEventHandler } from 'react'
import * as S from './style'

type ButtonType = 'primary' | 'transparent' 

interface ButtonProps {
  children : React.ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
  type?: ButtonType
}

export const Buttons = ({children, onClick, type = 'primary'} : ButtonProps) => {
  switch (type) {
    case 'primary':
      return <S.PrimaryBtn onClick={onClick}>{children}</S.PrimaryBtn>
    case 'transparent':
      return <S.TransparentBtn onClick={onClick}>{children}</S.TransparentBtn>  
  }
}
