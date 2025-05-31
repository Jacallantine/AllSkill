"use client";
import { GoogleLogin } from '@react-oauth/google';

export default function GoogleButton() {
  const handleSuccess = async (credentialResponse) => {
    const idToken = credentialResponse.credential;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/auth/google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Important: allows cookies to be set
      body: JSON.stringify({ idToken }),
    });

    if (res.ok) {
      window.location.href = "/"; // or redirect user
    } else {
      console.error("Login failed");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => console.error('Login Failed')}
    />
  );
}