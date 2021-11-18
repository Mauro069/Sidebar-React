import React from 'react';
import {NavLink} from 'react-router-dom';
import {linkOpen, normal} from './styles.module.scss';

const Item = ({to, svg, text, open}) => {
  return (
    <NavLink to={to} className={open ? linkOpen : normal}>
      <div>
        {svg}
      </div>
      {open ? <p>{text}</p> : null}
    </NavLink>
  );
};

export default Item;
