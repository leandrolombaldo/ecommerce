import { useHistory, Link } from 'react-router-dom';

import { NavCenter, NavHeader, Img } from './styles.js';
import Burger from './burguer.js';

import Logo from "../../assets/logo.svg";




const Navtop = () => {
  const history = useHistory();

  return (
    <>
      <NavCenter>
        <NavHeader>
          <Link onCLick={() => history.push('/')} >
            <Img src={Logo}/>
          </Link>
        </NavHeader>          
        <Burger />
      </NavCenter>
      
    </>

  );
}

export default Navtop;

