import './app.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'reactstrap';
import { HashRouter as Router } from 'react-router-dom';

import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import Header from 'app/shared/layout/header/header';
import Footer from 'app/shared/layout/footer/footer';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import ErrorBoundary from 'app/shared/error/error-boundary';
import { AUTHORITIES } from 'app/config/constants';
import AppRoutes from 'app/routes';

export interface IAppProps extends StateProps, DispatchProps {}

export class App extends React.Component<IAppProps> {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    const paddingTop = '60px';
    return (
      <Router>
        <div className="app-container">
          <ErrorBoundary>
            {/* Pls set 'isAuthenticated' true to see the Header componet */}
            <Header isAuthenticated={this.props.isAuthenticated} data={12}/>
          </ErrorBoundary>
          <div
            className="container-fluid view-container"
            id="app-view-container"
          >
            <ErrorBoundary>
              <AppRoutes />
            </ErrorBoundary>
            {/* Pls set 'isAuthenticated' true to see the Footer componet */}
            <Footer isAuthenticated={this.props.isAuthenticated} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated,
  isAdmin: hasAnyAuthority(authentication.account.authorities, [
    AUTHORITIES.ADMIN
  ])
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
