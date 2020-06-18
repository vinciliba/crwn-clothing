import React,{useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';


const SignIn = ({ emailSignInStart,googleSignInStart }) => {

const [userCredentials , setUserCredentials] = useState ({ email : '', password :''});

const {email , password } = userCredentials;

const handleSubmit = async event => {
  event.preventDefault();
  emailSignInStart(email, password);
};

const handleChange = event => {
    const { value , name } = event.target;
    setUserCredentials ( {...userCredentials, [name] : value} );
};

return (

<div className='sign-in'>
    <h2> I already have an account</h2>
    <span>Sin in with your email and password</span>

<form onSubmit={handleSubmit}>
    <FormInput name="email" type='email' value={email} handleChange={handleChange} label='email' required />
    <FormInput name="password" type='password' value={password} handleChange={handleChange} label='password' required />
    <CustomButton type='submit' value='Submit form' > Submit form </CustomButton>
</form>

</div>

);

}


export default SignIn;