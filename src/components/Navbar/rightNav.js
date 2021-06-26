import {useHistory, Link} from 'react-router-dom';

import { Ul, Social} from './styles';
import { FaShoppingBag, FaRegUser } from "react-icons/fa";

import { useCart } from '../../hooks/useCart';


const RightNav = ({ open }) => {
    const history = useHistory();
    const { cart } = useCart();


    return (
        <Ul open={open}>
            <li>
                <Link className="a" onCLick={() => history.push('/')}>Home</Link>
            </li>
            <li>
                <Link className="a" onCLick={() => history.push('/about')}>About</Link>
            </li>
            <li>
                <Link className="a">Shop</Link>
            </li>
            <li>
                <Link className="a">Contact Us</Link>
            </li>
            <Social>
                <li>
                    <Link className="a" onCLick={() => history.push('/cart')}><FaShoppingBag color='#000' />
                        {cart.reduce((acc, item) => acc + item.qty, 0)}
                    </Link>
                </li>
                <li>
                    <Link className="a" onCLick={() => history.push('/signin')}><FaRegUser color='#000' /></Link>
                </li>
            </Social>
        </Ul>
    )
}

export default RightNav;