/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#FFF" d="M47.7 23.2L24.8.3c-.2-.2-.5-.3-.8-.3s-.6.1-.8.3L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.2.2.5.3.8.3s.6-.1.8-.3l22.9-22.9c.4-.4.4-1.2 0-1.6zm-.7.9L24.1 47h-.2L1 24.1v-.2L23.9 1h.2L47 23.9v.2zM24 9L13 20h8v19h6V20h8L24 9z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconHighInverse";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
