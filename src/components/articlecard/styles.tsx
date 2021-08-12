import styled from "styled-components";
import { color } from "../constants/color";
export const ArticleCardContainer = styled.div`
  .article-card-container {
    background: #ffffff;
    width: 100%;
    max-height: 100px;
    height: 100px;
    display: flex;
    border-radius: 15px;
    &:hover {
      background-color: ${color.light.grey};
      transition: 0.3s;
      cursor: pointer;
    }
    .article-card-wrapper {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      img {
        border-radius: 50%;
        height: 45px;
        margin: 8px;
      }
      .article-info {
        display: flex;
        flex-direction: row;
        width: 80%;
        .div1 {
          display: flex;
          width: 90%;
          flex-direction: column;
          .article-desc {
            font-size: 18px;
            color: rgba(0, 0, 0, 0.9);
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .about-article {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .article-publisher {
              font-size: 14px;
              color: rgba(0, 0, 0, 0.4);
              font-weight: 600;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              width: 60%;
            }
            .publishing-date {
              font-size: 14px;
              color: rgba(0, 0, 0, 0.4);
              font-weight: 600;
              white-space: nowrap;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
        .div2 {
          width: 10%;
          .article-details {
            display: flex;
            justify-content: flex-end;
            margin: 8px;
          }
        }
      }
    }
  }
`;
