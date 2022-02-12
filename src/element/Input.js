import React from 'react';
import styled from 'styled-components';

import { Text, Grid } from './index';

const Input = (props) => {
  const {label, placeholder, _onChange, type, multiLine, value, is_submit, onSubmit, radio, paddingTop} = props;
  
  const styles = {
    paddingTop,
  }

  if (multiLine) {
    return (
      <Grid>
        {label && <Text>{label}</Text>}
        <ElTextarea  
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <>
      <Grid>
        {label && <Text>{label}</Text>}
        {is_submit ? (
          <ElInput
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            onKeyPress={(e) => {
              if(e.key === "Enter"){
                onSubmit(e);
              }
            }}
          />
        ) : (
          <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
        )}
      </Grid>
    </>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: '내용을 입력해주세요.',
  type: 'text',
  value: "",
  is_submit: false,
  radio: false,
  paddingTop: false,
  onSubmit: () => {},
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  border: none;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  ${(props)=> props.paddingTop ? `padding-top: ${props.paddingTop}`: ""};
`;

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;