import { useState } from "react";

import { signInWithGooglePopup ,  createUserDocumentFromAuth ,signInAuthUserWithEmailAndPassword, auth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import Button from "../buttons/button.component";

const defaultFormField={
    email: '',
    password : '',
};

const SignInForm= () =>{
    const [formFields , setFormFields] = useState(defaultFormField);
    const { email ,password } = formFields;

    console.log(formFields);

    const resetFormFields =() =>{
        setFormFields(defaultFormField);
    };

    const signInWithGoogle = async() => {
        const {user} = await signInWithGooglePopup();
         await createUserDocumentFromAuth(user);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
         const response = await signInAuthUserWithEmailAndPassword(email,password);
         console.log(response);
         resetFormFields();        
         
        } catch (error) {
            if(error.code == 'auth/invalid-credential'){
                alert("Invalid credentials");
            }else{
         console.log(error);
            }
        }
      };

    const handleChange =(event) =>{
        const {name , value} = event.target;

        setFormFields({...formFields, [name] : value});
    };

    return ( 
        <div className="sign-in-container">
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={handleSubmit}>
             
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

            <div className="buttons-container">
                <Button  type="submit">Sign up</Button>
                <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
            </div>

            </form>
        </div>
    );
};

export default SignInForm;