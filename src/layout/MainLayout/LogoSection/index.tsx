import { Link } from 'react-router-dom';

import {ButtonBase, Typography} from '@mui/material';
import * as React from "react";

export default function LogoSection() {
    return (
        <ButtonBase disableRipple onClick={() => console.log('도망가자')}  component={Link} to={''}>
          <img src="/public/assets/logo/aclosetFullLogoWhite.png" alt="acloset" width="100" />
        </ButtonBase>
    );
};

