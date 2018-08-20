import React from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem} from 'reactstrap';
import {Link} from 'react-router-dom'
import './main-nav.scss';

import userAvatar from '../../assets/img/meC.png';

const MainNav = (props) => {
    return (
        <Container>
            <Navbar className='mt-4 mb-4 px-0' dark expand="xs">
                <NavbarBrand href="/"><i className="main-nav__oma-logo d-block"></i></NavbarBrand>
                <NavbarToggler />
                <Collapse isOpen={true} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className='active mt-2'>
                            <NavLink tag={Link} to='/'>Discover</NavLink>
                        </NavItem>
                        <NavItem className='mt-2'>
                            <NavLink className='px-0 mx-0'>|</NavLink>
                        </NavItem>
                        <NavItem className='mt-2'>
                            <NavLink tag={Link} to='/saved'>Saved</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle className='px-0 ml-2' nav>
                                <img className="main-nav__message-avatar rounded-circle" src={userAvatar}/>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    );
}

export default MainNav;