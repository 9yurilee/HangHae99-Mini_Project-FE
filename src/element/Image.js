import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  const { src, shape, width, height } = props;
  const styles = {
    src,
    shape,
    width,
    height,
  };

  // if (shape === 'Main') {
  //   return <ImageMain {...styles}></ImageMain>;
  // }
  // if (shape === 'PostWrite') {
  //   return <ImagePostWrite {...styles}></ImagePostWrite>;
  // }
  return <ImageDefault {...styles}></ImageDefault>;
};

Image.defaultProps = {
  src: 'https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTdfMTk3/MDAxNTg0Mzk4OTA4ODg4.hwaeE1K1HeX0eaeR92brRViNSw9zhnFFbQYvXsthv2og.Z74803ADDNDmKJbWt0mq9FlgHXkpGz7wh3ceZXMXXRgg.JPEG.milkhanger/IMG_9931.JPG?type=w800',
  width: '',
  height: '',
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  background-image: url('${(props) => props.src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

// const ImageMain = styled.div`
//   width: 400px;
//   background-image: url('${(props) => props.src}');
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;
// `;

// const ImagePostWrite = styled.div`
//   width: 300px;
//   min-width: 300px;
//   height: 250px;
//   background-color: #59c1c3;
//   background-image: url('${(props) => props.src}');
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;

//   overflow: hidden;
// `;

export default Image;
