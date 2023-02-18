import { motion } from "framer-motion";
import styled from "styled-components";
import {Panel} from "@vkontakte/vkui";

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

export const RHLogo = styled(motion.img)`
  width: 200px;
  max-width: 500px;
`;

export const Text = styled(motion.span)`
  font-size: 19px;
  color: #fff;
  margin: 30px;
  user-select: none;
`