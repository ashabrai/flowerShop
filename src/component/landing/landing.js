// import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
//
// import * as routes from '../../routes';
// import * as authActions from '../../action/auth';
// import AuthForm from "../auth-form/auth-form";
//
// class Landing extends React.Component {
//     handleLogin = (user) => {
//         return this.props.pDoLogin(user)
//             .then(() => {
//                 this.props.history.push(routes.DASHBOARD);
//             })
//             .catch(console.error);
//     };
//
//     handleSignup = (user) => {
//         return this.props.pDoSignUp(user)
//             .then(() =>{
//                 this.props.history.push(routes.DASHBOARD);
//             })
//             .catch(console.error);
//     };
//
//     render() {
//         const rootJSX = <div>
//             <h3>Welcome Millsweet Flower Co</h3>
//             <h5>Create an account, or login in </h5>
//             <Link to='/signup'>Create a profile</Link>
//             <Link to='/login'>Login</Link>
//         </div>;
//
//         const signUpJSX = <div>
//             <h3>Create a Profile</h3>
//             <AuthForm
//                 type ='signup'
//                 onComplete={this.handleSignup}
//                 />
//             <p>Already a member?</p>
//             <Link to ='/login'> Login to Account</Link>
//         </div>;
//
//         const loginJSX = <div>
//             <h3>Login</h3>
//             <AuthForm
//                 type='login'
//                 onComplete={this.handleLogin}
//                 />
//             <p>Not a member?</p>
//             <Link to='/login'>Login here</Link>
//         </div>;
//
//             const { location } = this.props;
//             console.log(location);
//
//             return (
//                 <section>
//                     { location.pathname === routes.ROOT ? rootJSX : undefined }
//                     { location.pathname === routes.SIGNUP ? signUpJSX : undefined }
//                     { location.pathname === routes.LOGIN ? loginJSX : undefined }
//                 </section>
//             )
//     };
// }
//
// const mapStateToProps = state => ({
//     token: state.token,
// });
//
// const mapDispatchToProps = dispatch => ({
//     pDoSignUp: user => dispatch(authActions.signupRequest(user)),
//     pDoLogin: user => dispatch(authActions.loginRequest(user)),
// });
//
// Landing.propTypes = {
//     token: PropTypes.string,
//     pDoSignUp: PropTypes.func,
//     pDoLogin: PropTypes.func,
//     location: PropTypes.object,
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Landing);
