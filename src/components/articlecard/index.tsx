import React, { ReactElement, useEffect } from "react";
import { ArticleCardContainer } from "./styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import EventIcon from "@material-ui/icons/Event";

interface Props {
  title?: string;
  byline?: string;
  date?: string;
  // image?: string;
}

export default function ArticleCard({
  title,
  byline,
  date,
}: // image,
Props): ReactElement {
  return (
    <ArticleCardContainer>
      <div className="article-card-container">
        <div className="article-card-wrapper">
          <img
            src="https://static01.nyt.com/images/2021/08/03/well/03Well-DeltaNow1/03Well-DeltaNow1-thumbStandard.jpg"
            alt="profile"
          />
          <div className="article-info">
            <div className="div1">
              <div className="article-desc">{title}</div>
              <div className="about-article">
                <div className="article-publisher">{byline}</div>
                <div className="publishing-date">
                  <EventIcon />
                  {date}
                </div>
              </div>
            </div>
            <div className="div2">
              <div className="article-details">
                <NavigateNextIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ArticleCardContainer>
  );
}
