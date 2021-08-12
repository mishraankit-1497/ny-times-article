import React, { ReactElement, useEffect, useState } from "react";
import ArticleCard from "../../components/articlecard";
import { ArticleContainer } from "./styles";
import axios from "axios";
import { ENDPOINTS } from "../../apis/endpoints/endpoints";
interface Props {}

export default function Articles({}: Props): ReactElement {
  const [list, setList] = useState<any>([]);

  const handleClick = (url: any) => {
    window.open(url, "_self");
  };

  useEffect(() => {
    axios
      .get(ENDPOINTS.ARTICLE.GET_LIST)
      .then((res: any) => {
        setList(res.data.results);
        console.log(list[0].media[0]["media-metadata"][0].url);
      })
      .catch((e: any) => {
        console.log(e);
      });
  }, []);

  return (
    <ArticleContainer>
      <div className="article-container">
        {list &&
          list.map((item: any, key: any) => {
            return (
              <div key={item.id} onClick={() => handleClick(`${item.url}`)}>
                <ArticleCard
                  title={item.title}
                  byline={item.byline}
                  date={item.published_date}
                />
              </div>
            );
          })}
      </div>
    </ArticleContainer>
  );
}
