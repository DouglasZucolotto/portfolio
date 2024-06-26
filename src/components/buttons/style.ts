import styled from 'styled-components'
import { colors } from '../../constants'

export const PrimaryBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 200px;
  height: 43px;
  background-color: transparent;
  border: 1px solid ${colors.purple.main50};
  border-radius: 16px;
  color: ${colors.purple.main50};
  font-size: 16px;
`

export const TransparentBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #898989;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${colors.purple.main50};
  }
`
