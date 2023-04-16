import React from 'react';
import theme from '../style/theme';

const logoLight = '/img/hagglesLight.png';
const logoDark = '/img/hagglesDark.png';

function HagglesIcon() {
  return (
    <img src={theme.palette.mode === 'dark' ? logoDark : logoLight} alt="" width="150px" />
  );
}

export default HagglesIcon;
