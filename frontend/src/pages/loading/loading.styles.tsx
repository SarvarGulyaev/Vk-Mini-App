import styled from "styled-components";
import {Panel} from "@vkontakte/vkui";
import {motion} from "framer-motion";

export const Background = styled(Panel)`
  & > .vkuiPanel__in {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    background: #1a1a1a;
  }
`

export const Text = styled(motion.span)`
  font-size: 18px;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50px;
    margin-bottom: 30px;
  }
`;

