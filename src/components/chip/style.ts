import styled from 'styled-components'
import { colors } from '../../constants'

export const Chip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 45px;
  margin-top: 50px;
  background-color: ${colors.purple.main5};
  border-radius: 16px;
  font-weight: 600;
  font-size: 20px;
  color: ${colors.purple.main};

  p {
    margin-right: 5px;
    margin-bottom: 2px;
  }
`
