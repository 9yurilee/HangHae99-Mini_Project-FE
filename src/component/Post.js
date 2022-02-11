import React from "react";
import { Button, Grid, Image, Text } from "../element/index";

//포스트 하나당 형태
const Post = (props) => {
  return (
    <React.Fragment>
      <Grid margin="15px auto" width="700" is_flex border="1px solid #fff">
        <Image
          width="350"
          height="300"
          src={
            "https://ilovecharacter.com/news/data/20210122/p179568629887999_597.jpg"
          }
          margin="20"
        />
        <Text>여기는 포스트의 텍스트입니다 정말 신이난다.</Text>
      </Grid>
    </React.Fragment>
  );
};

export default Post;
