import React from 'react';
import Header from '../component/Header';
import styled from 'styled-components';
import {Image} from '../element/index';

const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <div style={{ display: 'flex' }}>
          <Image />
          <TextWrap><IDWrap>아이디</IDWrap><TEXT>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</TEXT></TextWrap>
        </div>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  background-color: #59c1c2;
  width: 700px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px auto;
  border: 1px solid #ccc;
  border-radius: 15px;
`;
const ImageWrap = styled.div`
  background-color: #59c1c2;
  background-image: url('https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTdfMTk3/MDAxNTg0Mzk4OTA4ODg4.hwaeE1K1HeX0eaeR92brRViNSw9zhnFFbQYvXsthv2og.Z74803ADDNDmKJbWt0mq9FlgHXkpGz7wh3ceZXMXXRgg.JPEG.milkhanger/IMG_9931.JPG?type=w800');
  background-size: contain;
  background-position: center;
  background-repeat: space;
  width: 350px;
  height: 250px;
`;

const TextWrap = styled.div`
  background-color: #59c1c2;
  width: 300px;
  height: 250px;
  text-align: left;
  /* margin-left */
`;

const IDWrap = styled.div`
background-color: #59c1c2;
 margin: 20px 30px 0px;
 font-weight: bold;
 font-size: 18px;
`;

const TEXT = styled.div`
background-color: #59c1c2;
  margin: 20px 30px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default Main;
