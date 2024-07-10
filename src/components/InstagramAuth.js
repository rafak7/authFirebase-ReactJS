import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const InstagramAuth = () => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

    if (code) {
      fetch('https://api.instagram.com/oauth/access_token', {
        method: 'POST',
        body: new URLSearchParams({
          client_id: 'YOUR_INSTAGRAM_CLIENT_ID',
          client_secret: 'YOUR_INSTAGRAM_CLIENT_SECRET',
          grant_type: 'authorization_code',
          redirect_uri: 'http://localhost:3000/instagram-auth',
          code: code
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error exchanging code for access token:', error);
      });
    }
  }, [location]);

  return (
    <div>
      <h1>Instagram Auth</h1>
      <p>Handling Instagram OAuth response...</p>
    </div>
  );
};

export default InstagramAuth;