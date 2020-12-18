export const setEmail=email=>({
    type:'ADD_EMAIL',
    payload:email
});
export const setPass=password=>({
    type:'ADD_PASSWORD',
    payload:password
});
export const submit=userData=>({
    type:'DONE',
    payload:userData
});