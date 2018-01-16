import {Component} from 'react';
import StyledBtth from 'styledComponents/styledBttn';

export default function Button({text, type, isDeleteBttn = ""}) {
    return (
      <StyledBtth type={type} delete={isDeleteBttn}>{text}</StyledBtth>
    );
}