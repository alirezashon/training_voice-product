// components/AuthButtons.tsx
import { signIn, signOut, useSession } from 'next-auth/react';

const AuthButtons = () => {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <button onClick={() => signIn()}>Sign In</button>
      ) : (
        <button onClick={() => signOut()}>Sign Out</button>
      )}
    </div>
  );
};

export default AuthButtons;
