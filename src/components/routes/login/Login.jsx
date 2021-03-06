import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../../utils/firebase/Firebase'

import SignUpForm from '../../sign-up-form/SignUpForm';

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};
export default Login;