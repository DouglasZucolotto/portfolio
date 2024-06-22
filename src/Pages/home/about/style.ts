import styled from 'styled-components'
import { colors } from '../../../constants'

export const About = styled.div`
  display: flex;

  .name {
    color: ${colors.white.main};
    font-size: 48px;
  }

  .job {
    display: flex;
    align-items: center;
    color: #898989;
  }

  .job > div {
    display: flex;
    gap: 10px;
    margin-left: 10px;
  }

  .presentation {
    color: #898989;
  }

  .about {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 40px;
    color: #898989;
  }

  .better {
    margin-top: 40px;
    color: #898989
  }
`
