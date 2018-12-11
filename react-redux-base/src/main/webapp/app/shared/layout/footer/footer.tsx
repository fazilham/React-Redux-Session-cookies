import './footer.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Container, Row, Col, Button, NavLink, FormText } from 'reactstrap';

const Footer = props => props.isAuthenticated ? (
    <footer className="footer">
        <Row>
        <Col xl="6">&copy; COPYRIGHT 2018 ZETA ALL RIGHT RESERVED</Col>
        <Col xl="6" className="text-right"><Link to="/privacy">Privacy Policy</Link> | <Link to="/acceptable">Acceptable Use Policy</Link>
        </Col>
        </Row>
    </footer>
) : null ;
export default Footer;
