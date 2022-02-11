import React from "react";
import { Button, Grid, Image, Text } from "../element/index";

//포스트 하나당 형태
const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
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
          <Text bg="#59c1c2" margin="0px 20px" text="이건 포스트의 텍스트입니다. 말줄임표 확인용이에욥" margin="0px 10px" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Post;
