import * as api from '../api/index.js';

export const signin = (formData,history) => async (dispatch) =>{
    try {
        const {data} = await api.signIn(formData);

        dispatch({type: 'AUTH',data});
        history.push('/');
    } catch (error) {
        alert("Invalid Username or Password")
        console.log(error);
    }
}
export const signup = (formData,history) => async (dispatch) =>{
    try {
        const {data} = await api.signUp(formData);

        dispatch({type: 'AUTH',data});
        history.push('/');
    } catch (error) {
        alert("User already exists! or Passwords didnt match")
        console.log(error);
    }
}