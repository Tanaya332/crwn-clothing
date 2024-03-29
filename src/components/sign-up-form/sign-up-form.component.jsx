import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

import { createAuthUserWithEmailAndPassword ,  createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';
import Button from "../buttons/button.component";

const defaultFormField={
    displayName: '',
    email: '',
    password : '',
    confirmPassword :'',
};


const SignUpForm= () =>{
    const [formFields , setFormFields] = useState(defaultFormField);
    const {displayName , email ,password ,confirmPassword} = formFields;
    const dispatch = useDispatch();

    console.log(formFields);

    const resetFormFields =() =>{
        setFormFields(defaultFormField);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (password !== confirmPassword) {
          alert('passwords do not match');
          return;
        }
    
        try {
          // const { user } = await createAuthUserWithEmailAndPassword(
          //   email,
          //   password
          // );
          
          // await createUserDocumentFromAuth(user, { displayName });
          dispatch(signUpStart(email, password , displayName));
           resetFormFields();
        } catch (error) {
          if (error.code == 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
          } else if(error.code == 'auth/weak-password'){
            alert('Password should be at least 6 characters');
          }
          else{
          console.log('user creation encountered an error', error);
          }
        }
      };

    const handleChange =(event) =>{
        const {name , value} = event.target;

        setFormFields({...formFields, [name] : value});
    };
    return(
        <div className="sign-up-container">
          <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
            
             <FormInput 
                label="Display Name"
                type="text" required 
                onChange={handleChange} 
                name="displayName" 
                value={displayName}/>

                
                <FormInput 
                label="Email"
                type="email" required 
                onChange={handleChange} 
                name="email" 
                value={email}/>

                <FormInput
                label="Password" 
                type="password" required 
                onChange={handleChange} 
                name="password" 
                value={password}/>

                <FormInput 
                label="Confirm Password"
                type="password" required 
                onChange={handleChange} 
                name="confirmPassword" 
                value={confirmPassword}/>
                
                <Button  type="submit">Sign up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;