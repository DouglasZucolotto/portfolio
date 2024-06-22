import { Buttons } from '../buttons/Buttons'
import * as S from './style'

export const Header = () => {
  return (
    <S.Header>
       <div className='btn'>
         <Buttons onClick={() => console.log()} type='transparent'>Home</Buttons>
         <Buttons onClick={() => console.log()} type='transparent'>Portfólio</Buttons>
         <Buttons onClick={() => console.log()} type='transparent'>Skills</Buttons>
         <Buttons onClick={() => console.log()} type='transparent'>Carreira</Buttons>
         <Buttons onClick={() => console.log()} type='transparent'>Contato</Buttons>
       </div>
    </S.Header>
  )
}
