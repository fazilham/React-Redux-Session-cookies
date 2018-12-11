import './_login.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Button,
  NavLink,
  FormGroup,
  FormText,
  InputGroup,
  InputGroupAddon,
  CustomInput
} from 'reactstrap';
import { IRootState } from 'app/shared/reducers';
import { login } from 'app/shared/reducers/authentication';
import {
  Formik,
  FormikProps,
  Form,
  Field,
  FieldProps,
  ErrorMessage
} from 'formik';
import * as Yup from 'yup';

export interface ILoginProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{}> {}

export interface ILoginState {
  loadingClass: string;
  showSubmitBtn: string;
}
const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Please enter your password'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email')
});

export class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props) {
    super(props);
    this.state = {
      loadingClass: 'hide',
      showSubmitBtn: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(values) {
    this.setState({
      loadingClass: 'show',
      showSubmitBtn: 'hide'
    });
    this.props.login(values.email, values.password);
  }
  render() {
    const { location, isAuthenticated } = this.props;
    const { from } = location.state || { from: { pathname: '/', search: location.search } };
    if (isAuthenticated) {
      return <Redirect to={from} />;
    }
    return (
      <Container>
        <Row>
          <Col xl="6" className="login-bg">
            <img
              className="login-img"
              src={require('../../images/login.jpg')}
            />
          </Col>
          <Col sm="12" xl="6" className="login-form">
            <h4>Welcome to the Intent Revolution</h4>
            <Formik
              initialValues={{
                password: '',
                email: ''
              }}
              validationSchema={SignupSchema}
              onSubmit={this.handleLogin}
            >
              {({ errors, touched }) => (
                <Form>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <i className="material-icons black">account_circle</i>
                      </InputGroupAddon>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        className={
                          errors.email && touched.email
                            ? 'text-input error'
                            : 'text-input'
                        }
                      />
                    </InputGroup>
                    <ErrorMessage name="email">
                      {msg => (
                        <div className="error-container">
                          <div className="error-tooltip">{msg}</div>
                        </div>
                      )}
                    </ErrorMessage>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <i className="material-icons black">lock</i>
                      </InputGroupAddon>
                      <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        className={
                          errors.password && touched.password
                            ? 'text-input error'
                            : 'text-input'
                        }
                      />
                    </InputGroup>
                    <ErrorMessage name="password">
                      {msg => (
                        <div className="error-container">
                          <div className="error-tooltip">{msg}</div>
                        </div>
                      )}
                    </ErrorMessage>
                  </FormGroup>
                  <FormGroup>
                    <CustomInput
                      type="checkbox"
                      id="CustomCheckbox"
                      label="Remember Me"
                    />
                  </FormGroup>
                  <Button className={'login-btn ' + this.state.showSubmitBtn} color="dark-blue" type="submit">
                    LOG IN
                  </Button>
                  <div className={'loadingicon ' + this.state.loadingClass}><img src={require('../../images/loading.GIF')} width={'20'} /></div>
                </Form>
              )}
            </Formik>
            {/*<div className="info">Don't have an account yet? Sign up</div>*/}
            {/*<div className="info">*/}
            {/*Forget your username or password? Reset password*/}
            {/*</div>*/}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated,
  loginError: authentication.loginError
});

const mapDispatchToProps = { login };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
