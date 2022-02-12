import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    float,
    bold,
    color,
    size,
    children,
    _onClick,
    margin,
    height,
    text,
    display,
    alignItems,
    justifyContent,
    textAlign,bg,
    position,
    left,right,paddingTop
  } = props;

  const styles = {
    bold,
    color,
    size,
    margin,
    height,
    text,
    display,
    alignItems,
    textAlign,
    justifyContent,
    float,
    bg,
    position,
    left,right,
    paddingTop,
  
  };

  // if (page === 'Main'){
  //   return (
  //     <>
        
  //     </>
  //   )
  // }

  return (
    <TextWrap {...styles} onClick={_onClick}>
      {text ? text : children}
    </TextWrap>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "",
  margin: false,
  _onClick: () => {},
  height: 0,
  text: "",
  display: false,
  alignItems: false,
  justifyContent: false,
  textAlign: 'left',
  bg: false,
  position: false,
  paddingTop: false,
};

const TextWrap = styled.div`
  min-width: 300px;
  color: ${(props) => props.color};
  ${(props)=> props.float ? `float: ${props.float}`: ""};
  ${(props)=> props.bg ? `background-color: ${props.bg}`: ""};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props)=> props.margin ? `margin: ${props.margin}`: ""};
  ${(props)=> props.position ? `position: ${props.position}`: ""};
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  ${(props)=> props.paddingTop ? `padding-top: ${props.paddingTop}`: ""};
  text-align: ${(props) => props.textAlign};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

export default Text;
