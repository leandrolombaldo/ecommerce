import {useHistory, Link} from 'react-router-dom';

import { Ul, Social, Li } from './styles';
import { FaShoppingBag, FaRegUser } from "react-icons/fa";

import { useCart } from '../../hooks/useCart';


export default function RightNav ({ open }) {

    const history = useHistory();
    const { cart } = useCart();


    return (
        <>
        <Ul open={open}>
            <Li>
                <Link className="a" onCLick={() => history.push('/')}>Home</Link>
            </Li>
            <Li>
                <Link className="a" onCLick={() => history.push('/about')}>About</Link>
            </Li>
            <Li>
                <Link className="a">Shop</Link>
            </Li>
            <Li>
                <Link className="a">Contact Us</Link>
            </Li>
            <Social>
                <Li>
                    <Link className="a" onCLick={() => history.push('/cart')}><FaShoppingBag color='#000' />
                        {cart.reduce((acc, item) => acc + item.qty, 0)}
                    </Link>
                </Li>
                <Li>
                      <Link className="a" onCLick={() => history.push('/signin')}><FaRegUser color='#000' /></Link>
                </Li>
            </Social>
        </Ul>
        </>
    )
}