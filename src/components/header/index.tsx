import React, { ReactElement } from "react";
import { HeaderStyledContainer } from "./styles";
import hamburger from "../../assets/hamburger.svg";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
interface Props {
  title?: string;
}

export default function Header({ title }: Props): ReactElement {
  return (
    <HeaderStyledContainer>
      <div className="header-container">
        <div className="header-name-icon">
          <div>
            <img src={hamburger} className="svg-icon1" alt="menu" />
          </div>
          <div className="heading-title">{title}</div>
        </div>
        <div>
          <SearchRoundedIcon
            style={{
              color: "white ",
              marginRight: "8px",
              fontSize: "27.5px",
              cursor: "pointer",
            }}
            className="svg-icon2"
          />
          <MoreVertRoundedIcon
            style={{ color: "white ", fontSize: "27.5px", cursor: "pointer" }}
            className="svg-icon2"
          />
        </div>
      </div>
    </HeaderStyledContainer>
  );
}
