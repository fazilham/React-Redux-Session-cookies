import React from 'react';

import {
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavItem,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

export const NavDropdown = props => (
    <UncontrolledDropdown nav inNavbar id={props.id}>
        <DropdownToggle nav caret className="d-flex align-items-center">
            <span>{props.name}</span>
        </DropdownToggle>
        <DropdownMenu right style={props.style}>
            {props.children}
        </DropdownMenu>
    </UncontrolledDropdown>
);

export const BrandIcon = props => (
    <div {...props} className="brand-icon">
        {' '}
        <img className="navbar-icon" src={require('app/images/logo.png')} />
    </div>
);

export const Brand = props => (
    <NavbarBrand tag={Link} to="/">
        <BrandIcon />
    </NavbarBrand>
);

export const UserInfo = props => (
    <div className="head-userinfo">
        <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    <img src={require('app/images/user-icon.png')} /> {props.username.firstName}
                </DropdownToggle>
                <Nav className="ml-auto" navbar>
                    <DropdownMenu right className={'profile-menu-nav'}>
                        <NavItem>
                            <NavLink href="/profile">Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/settings">Settings</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/logout">Logout</NavLink>
                        </NavItem>
                    </DropdownMenu>
                </Nav>
            </UncontrolledDropdown>
        </Nav>
    </div>
);
