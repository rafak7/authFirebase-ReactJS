import React from 'react';
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import { auth, googleProvider, facebookProvider, twitterProvider } from '../firebase';
import './SignIn.css';

const SignIn = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
  const [signInWithTwitter, userTwitter, loadingTwitter, errorTwitter] = useSignInWithTwitter(auth);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await signInWithFacebook();
    } catch (error) {
      console.error('Facebook Sign-In Error:', error);
    }
  };

  const handleTwitterSignIn = async () => {
    try {
      await signInWithTwitter();
    } catch (error) {
      console.error('Twitter Sign-In Error:', error);
    }
  };

  const handleInstagramSignIn = () => {
    const clientId = 'YOUR_INSTAGRAM_CLIENT_ID';
    const redirectUri = 'http://localhost:3000/instagram-auth';
    const instagramAuthUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

    window.location.href = instagramAuthUrl;
  };

  if (loadingGoogle || loadingFacebook || loadingTwitter) {
    return <p>Loading...</p>;
  }

  if (errorGoogle || errorFacebook || errorTwitter) {
    return <p>Error: {errorGoogle?.message || errorFacebook?.message || errorTwitter?.message}</p>;
  }

  if (userGoogle || userFacebook || userTwitter) {
    return <p>Signed In User: {userGoogle?.user.displayName || userFacebook?.user.displayName || userTwitter?.user.displayName}</p>;
  }

  return (
    <div className="container">

<div className="form-group">
        <input type="email" className="input" placeholder="Email" />
      </div>
      <div className="form-group">
        <input type="senha" className="input" placeholder="Senha" />
      </div>

      <button className="button facebook" onClick={handleFacebookSignIn}>Sign in with Facebook</button>
      <button className="button twitter" onClick={handleTwitterSignIn}>Sign in with Twitter</button>
      <button className="button google" onClick={handleGoogleSignIn}>Sign in with Google</button>
      <button className="button linkedin" onClick={handleInstagramSignIn}>Sign in with Instagram</button>
      <button className="sign-in-button">Sign In</button>
    </div>
  );
};

export default SignIn;