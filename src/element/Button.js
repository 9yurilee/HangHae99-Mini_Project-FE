import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { text, _onClick, is_float, children, margin, width, height, padding, size, bg, color } = props;

  if (is_float) {
    return (
      <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    size: size,
    height,bg, color
  };

  return (
    <ElButton {...styles} onClick={_onClick}>
      {text ? text : children}
    </ElButton>
  );
};

//속성을 정해주는 느낌
Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: '100%',
  padding: "12px 0px",
  height: false,
  bg: false,
  color: false,
};

const ElButton = styled.button`
  /* ${(props) => (props.width ? `width: ${props.width};` : "")} */
  width: ${(props) => props.width};
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  /* ${(props)=> props.bg ? `background-color: ${props.bg}`: ""}; */
  background-color: #f47b6a;
  ${(props)=> props.color ? `color: ${props.color}`: ""};
  padding: 12px 0px;
  box-sizing: border-box;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  font-size: ${(props)=> props.size};
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: navy;
  color: #fff;
  box-sizing: border-box;
  font-size: 35px;
  font-weight: 800;
  position: fixed;
  bottom: 25px;
  right: 25px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;

export default Button;