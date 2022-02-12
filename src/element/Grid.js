import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    height,
    padding,
    margin,
    bg,
    border,
    children,
    center,
    borderRadius,
    position,
    _onClick,
  } = props;
  //children이 스타일을 담당하는 애가 아니라서 styles를 따로 선언..?
  const styles = {
    is_flex: is_flex,
    width: width,
    height,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    border: border,
    borderRadius,
    position,
  };
  return (
    <div>
      <GridBox onClick={_onClick} {...styles}>
        {children}
      </GridBox>
      {/* 여기 원래 ...props 였음 */}
      {/* 자식 객체를 넣는다..? */}
    </div>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "100%",
  height: "100vh",
  padding: false,
  margin: false,
  bg: "#59c1c2",
  border: false,
  center: false,
  borderRadius: false,
  position: false,

  _onClick: () => {},
};

const GridBox = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  /* ${(props) => (props.bg ? `background-color: ${props.bg}` : "")}; */
  background-color: #59c1c2;
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-evenly;`
      : ""}
  ${(props) => (props.center ? `text-align: center` : "")}
  ${(props) => (props.border ? `border: ${props.border}` : "")}
  border-radius: ${(props) => props.borderRadius}px;
  `;

export default Grid;
