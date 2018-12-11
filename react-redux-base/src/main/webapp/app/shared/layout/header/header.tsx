import './header.scss';
import React from 'react';
import { connect } from 'react-redux';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  NavLink,
  NavbarBrand,
  Collapse,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { getSession } from 'app/shared/reducers/authentication';
import LoadingBar from 'react-redux-loading-bar';
import { Brand, UserInfo } from './header-components';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { NavDropdown } from 'app/shared/layout/header/header-components';
import ReactTable from 'react-table';
import { Storage } from 'app/shared/util/utils';
export interface IHeaderProps {
  isAuthenticated: boolean;
  data: any;
}

export interface IHeaderState {
  menuOpen: boolean;
  selected: any;
  accountData: any;
}

const loginResponse = {
  id: 428,
  email: 'pguna@zetainteractive.com',
  name: 'pguna@zetainteractive.com',
  hashedPassword:
    'dtPL3GwZRePU9BZceLY2LIyH3WZX8Triye3Lnm9V8RhZhA0uiaeMNyVnUhgLggjeEuajM4qXyvFfUJ5qiGohnw==',
  firstName: 'Prabu',
  lastName: 'Guna',
  orgToAccounts: {
    Actions: [
      {
        id: 1216,
        name: 'Act2 XSell (1216)',
        userCount: 41,
        orgId: 4,
        orgName: 'Actions',
        creatorId: 190,
        creationTime: 1335386419000,
        key: 'act2 xsell (1216)'
      },
      {
        id: 1702,
        name: 'DMC TV (1702)',
        userCount: 8,
        orgId: 4,
        orgName: 'Actions',
        creatorId: 403,
        creationTime: 1412884405000,
        key: 'dmc tv (1702)'
      },
      {
        id: 179,
        name: 'XL Email Display (179)',
        userCount: 40,
        orgId: 4,
        orgName: 'Actions',
        creatorId: 159,
        creationTime: null,
        key: 'xl email display (179)'
      },
      {
        id: 176,
        name: 'ADT Search (176)',
        userCount: 18,
        orgId: 4,
        orgName: 'Actions',
        creatorId: 159,
        creationTime: null,
        key: 'adt search (176)'
      },
      {
        id: 1022,
        name: 'DMC Interactive (1022)',
        userCount: 12,
        orgId: 4,
        orgName: 'Actions',
        creatorId: 413,
        creationTime: 1409864891000,
        key: 'dmc interactive (1022)'
      },
      {
        id: 1213,
        name: 'Act2 Mortgage (1213)',
        userCount: 47,
        orgId: 4,
        orgName: 'Actions',
        creatorId: 190,
        creationTime: 1335381035000,
        key: 'act2 mortgage (1213)'
      },
      {
        id: 1077,
        name: 'Action Call Center (1077)',
        userCount: 15,
        orgId: 4,
        orgName: 'Actions',
        creatorId: 206,
        creationTime: 1322678876000,
        key: 'action call center (1077)'
      },
      {
        id: 1215,
        name: 'CJ (1215)',
        userCount: 6,
        orgId: 4,
        orgName: 'Actions',
        creatorId: 190,
        creationTime: 1335385536000,
        key: 'cj (1215)'
      },
      {
        id: 1021,
        name: 'DMC Email (1021)',
        userCount: 11,
        orgId: 4,
        orgName: 'Actions',
        creatorId: 413,
        creationTime: 1409864259000,
        key: 'dmc email (1021)'
      },
      {
        id: 1703,
        name: 'DMC Search (1703)',
        userCount: 9,
        orgId: 4,
        orgName: 'Actions',
        creatorId: 403,
        creationTime: 1413502282000,
        key: 'dmc search (1703)'
      },
      {
        id: 1706,
        name: 'DMC Search2 (1706)',
        userCount: 9,
        orgId: 4,
        orgName: 'Actions',
        creatorId: 413,
        creationTime: 1432060938000,
        key: 'dmc search2 (1706)'
      },
      {
        id: 1230,
        name: 'XL Social (1230)',
        userCount: 21,
        orgId: 4,
        orgName: 'Actions',
        creatorId: 190,
        creationTime: 1336621119000,
        key: 'xl social (1230)'
      },
      {
        id: 2003,
        name: 'DDI Email (2003)',
        userCount: 41,
        orgId: 4,
        orgName: 'Actions',
        creatorId: 159,
        creationTime: null,
        key: 'ddi email (2003)'
      },
      {
        id: 1701,
        name: 'DMC Banner (1701)',
        userCount: 11,
        orgId: 4,
        orgName: 'Actions',
        creatorId: 406,
        creationTime: 1410279468000,
        key: 'dmc banner (1701)'
      },
      {
        id: 1217,
        name: 'ADT affiliate (1217)',
        userCount: 20,
        orgId: 4,
        orgName: 'Actions',
        creatorId: 190,
        creationTime: 1335387064000,
        key: 'adt affiliate (1217)'
      }
    ]
  }
};
export class Header extends React.Component<
  IHeaderProps,
  IHeaderState
  > {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      selected: null,
      accountData: localStorage.getItem('ACCOUNT_DATA')
    };
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };
  filterMethod = (filter, row) =>
    String(row[filter.id].toLowerCase()).includes(filter.value.toLowerCase());
  render() {
    const { isAuthenticated } = this.props;
    let account_data: any = '';
    /*account_data = localStorage.getItem('ACCOUNT_DATA');
    if (account_data) {
      account_data = JSON.parse(account_data);
    }*/
    account_data = loginResponse;
    return (
      <div>
        {isAuthenticated ? (
          <header className="app-header">
            <LoadingBar className="loading-bar" />
            <Navbar expand="md" light color="primary">
              <NavbarToggler aria-label="Menu" onClick={this.toggleMenu} />
              <Brand />
              <Collapse isOpen={this.state.menuOpen} navbar>
                <Nav id="header-tabs" navbar>
                  <NavItem>
                    <NavLink tag={Link} to="/">Dashboard</NavLink>
                  </NavItem>
                  <NavDropdown name="Accounts" id="account-dropdown">
                    <ReactTable
                      data={account_data.orgToAccounts.Actions}
                      filterable
                      defaultFilterMethod={this.filterMethod}
                      columns={[
                        {
                          columns: [
                            {
                              accessor: 'name',
                              Cell: row => <a href="#">{row.value}</a>,
                              filterable: true,
                              Filter: ({ filter, onChange }) => (
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <i className="material-icons">search</i>
                                  </InputGroupAddon>
                                  <input
                                    onChange={event =>
                                      onChange(event.target.value)
                                    }
                                    value={filter ? filter.value : ''}
                                    placeholder="Search Account..."
                                    style={{
                                      width: '90%'
                                    }}
                                  />
                                </InputGroup>
                              )
                            }
                          ]
                        }
                      ]}
                      defaultSorted={[
                        {
                          id: 'name',
                          desc: false
                        }
                      ]}
                      minRows={0}
                      showPagination={false}
                      className="menu -highlight"
                    />
                  </NavDropdown>
                </Nav>
              </Collapse>
              <UserInfo username={account_data} />
            </Navbar>
          </header>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
  accountData: storeState.authentication.accountData
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
