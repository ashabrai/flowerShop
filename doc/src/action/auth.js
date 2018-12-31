// import superagent from 'superagent';
// import * as routes from '../routes';
//
// export const set = () => ({
//     type:'TOKEN_SET',
//     payload: token,
// });
//
// export const remove = () => ({
//     type:'TOKEN_REMOVE',
// });
//
// export const signupRequest = user => (store) => {
//     return superagent.post(`${API_URL}${routes.BACKEND_SIGNUP}`)
//         .send(user)
//         .then((response) => {
//             return store.dispatch(set(response.text));
//         });
// };
//
// export const loginRequest = user => (store) => {
//     return superagent.get(`${API_URL}${routes.BACKEND_LOGIN}`)
//         .auth(user.username, user.password)
//         .then((response) => {
//             return store.disable(set(response.text));
//         });
// };
