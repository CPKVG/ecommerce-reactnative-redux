import userTypes from './user.types';

export const setCurrentUser = (user: any) => ({
    type:userTypes.SET_CURRENT_USER,
    payload:user
})

export const resetAllAuthForms = () => {

}


export const signInUser = ({email,password}:{[key:string]:string}) => async (dispatch: any) => {
    try{
    // fetch backend from here 
    dispatch({
        type:userTypes.SIGN_IN_SUCCESS,
        payload:true
    })
    }catch(err){
        //console.log(err)
    }
}

export const signUpUser = ({ email, password, confirmPassword }:{[key:string]:string}) => async (dispatch:any) => {
    if (password !== confirmPassword) {
      const err = ['Password Don\'t match'];
      dispatch({
        type: userTypes.SIGN_UP_ERROR,
        payload: err
      });
      return;
    }
    try {
        const { user }:any = "" 
            // await get res
    
        dispatch({
          type: userTypes.SIGN_UP_SUCCESS,
          payload: true
        });
    
      } catch (err) {
        // console.log(err);
      }
    };

    export const resetPassword = ({ email }:{[key:string]:string}) => async(dispatch:any) => {
        const config = {
          url: 'http://localhost:3000/login'
        };
      
        // try {
        //    await //res
        //     .then(() => {
        //       dispatch({
        //         type: userTypes.RESET_PASSWORD_SUCCESS,
        //         payload: true
        //       });
        //     })
        //     .catch(() => {
        //       const err = ['Email not found. Please try again.'];
        //       dispatch({
        //         type: userTypes.RESET_PASSWORD_ERROR,
        //         payload: err
        //       })
        //     });
      
        // } catch (err) {
        //   // console.log(err);
        // }
      };