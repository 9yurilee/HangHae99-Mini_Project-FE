import React from "react";
import { Grid, Image, Text } from "../element/index";
import { useHistory } from "react-router-dom";

//포스트 하나당 형태
const Post = (props) => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Grid margin="120px auto" _onClick={() => history.push("/detail")}>
        <Grid
          bg="#59c1c2"
          margin="15px auto"
          width="700"
          is_flex
          borderRadius="10"
          position="relative"
        >
          <Image
            width="350"
            height="300"
            src={
              "https://ilovecharacter.com/news/data/20210122/p179568629887999_597.jpg"
            }
            margin="20px 5px"
          />
          <Text bg="#59c1c2" margin="0px 20px" text="이건 포스트의 텍스트입니다. 말줄임표 확인용이에욥" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Post;