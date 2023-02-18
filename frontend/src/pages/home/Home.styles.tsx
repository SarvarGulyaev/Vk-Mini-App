import styled from "styled-components";
import {Panel} from "@vkontakte/vkui";

export const Background = styled(Panel)`
  & > .vkuiPanel__in {
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: end;
    height: 100vh;
    position: relative;

    background: url("/img/wallpaper.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    //background: #242424;
  }
`

export const AboutPerson = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.div`
  img {
    border-radius: 50%;
    width: 48px
  }
`

export const UserInfo = styled.div`
  color: white;
  font-weight: 600;
`

export const Level = styled.div`
    
`
