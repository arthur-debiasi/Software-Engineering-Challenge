import logoDark from '../img/hagglesdark.png'
import logoLight from '../img/haggleslight.png'

import theme from '../style/theme'

function HagglesIcon() {
  return (
    <img src={theme.palette.mode === 'dark'? logoDark : logoLight} alt='' width='150px'/>
  )
}

export default HagglesIcon;