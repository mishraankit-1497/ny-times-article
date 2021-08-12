import styled from "styled-components";
import { color } from "../constants/color";
import { device } from "../constants/screen";
export const HeaderStyledContainer = styled.div`
  padding: 0vh 10vw;
  background-color: ${color.light.blue};
  position: fixed;
  z-index: 2;
  width: 100%;
  .header-container {
    display: flex;
    justify-content: space-between;
    height: 10vh;
    align-items: center;
    white-space: nowrap;
    .header-name-icon {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 26px;
      color: ${color.light.white};
      font-weight: 600;
      letter-spacing: 1px;
      width: 13%;
      .heading-title {
        padding: 2%;
        padding-left: 10px;
      }
      .svg-icon1 {
        display: none;
      }
    }

    @media ${device.laptop} {
      .header-name-icon {
        font-size: 20px;
        .svg-icon1 {
          display: block;
        }
      }
    }
    @media ${device.mobileL} {
      .header-name-icon {
        font-size: 14px;
        padding-left: 10px;
      }
    }
  }
`;
