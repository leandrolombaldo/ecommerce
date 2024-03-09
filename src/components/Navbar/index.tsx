import { NavLink } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';
import { FaShoppingBag, FaRegUser } from 'react-icons/fa';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import { useCart } from '../../hooks/useCart';

const Navtop = () => {
	const { cart } = useCart();

	return (
		<Container>
			<Navbar className='navbar' expand='lg'>
				<Navbar.Brand style={{ cursor: 'pointer' }}>
					<img src={Logo} alt="logo Carolina's store" onClick={() => '/'} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto' style={{ fontFamily: 'Raleway', fontSize: '20px' }}>
						<NavLink to='/'>Home</NavLink>
						<NavLink to='/about'>About</NavLink>
						{/* <NavLink href='#Em-Construção'>Shop</NavLink>
						<NavLink href='#Em-Construção'>Contact US</NavLink> */}
					</Nav>
					<Nav className='justify-content-end' style={{ fontFamily: 'Raleway', fontSize: '20px' }}>
						<NavLink to='/cart'>
							<FaShoppingBag color='#000' />
							{cart.reduce((acc, item) => acc + item.quantity, 0)}
						</NavLink>
						<NavLink to='/signin'>
							<FaRegUser color='#000' />
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

export default Navtop;
