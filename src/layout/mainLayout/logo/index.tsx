import * as React from 'react';
import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';

export default function LogoSection() {
  return (
    <ButtonBase
      disableRipple
      onClick={() => console.log('도망가자')}
      component={Link}
      to="/"
    >
      <img
        src="/assets/logo/aclosetFullLogoWhite.png"
        alt="acloset"
        width="100"
      />
    </ButtonBase>
  );
}
