import React from "react";
import Post from "../component/Post";
import { Button, Grid, Image, Text, Input } from "../element/index";

const PostWrite = () => {
  return (
    <React.Fragment>
      작성페이지~
      <Grid
        margin="15px auto"
        width="700"
        height="500"
        borderRadius="10"
      >
        <Grid is_flex>
          <Image
            width="350"
            height="400"
            src={
              "https://ilovecharacter.com/news/data/20210122/p179568629887999_597.jpg"
            }
            margin="20px 5px"
          />
          <Text>
            <Text
              bold
              margin="0px 0px 10px 0px"
              textAlign="left"
              bg="#59c1c2"
              text="출생년도"
            />
            <Grid 
                display= "flex"
                alignItems= "center"
            >
              <input style={{background: "#59c1c2"}} type="radio" name="year" value="80s" id="80s" /> 1980년대
              <input type="radio" name="year" value="90s" id="90s" /> 1990년대
              <input type="radio" name="year" value="2000s" id="2000s" />{" "}2000년대
            </Grid>
            <Grid>
              <Text bold margin="10px 0px"bg="#59c1c2" textAlign="left" text="게시물 내용" />
              <Input multiLine></Input>
            </Grid>
          </Text>
        </Grid>
        <Grid is_flex>
          <Button
            width="120px"
            height="50px"
            color="white"
            bg="#f47b6a"
            text="돌아가기"
          ></Button>
          <Button
            width="120px"
            height="50px"
            color="white"
            bg="#f47b6a"
            text="작성하기"
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
