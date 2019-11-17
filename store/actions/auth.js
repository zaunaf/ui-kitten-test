export const GOOGLE_SIGNIN = 'GOOGLE_SIGNIN';

export const googleSignin = (email) => {
    // console.log("googleSignin action is kicked!");
    return { type : GOOGLE_SIGNIN, email : email }
}
