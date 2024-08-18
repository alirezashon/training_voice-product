import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './Auth.module.css';

const Auth = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      {session ? (
        <div className={styles.loggedIn}>
          <p className={styles.welcome}>Welcome, {session.user?.email}</p>
          <button className={styles.button} onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      ) : (
        <div className={styles.loggedOut}>
          <p className={styles.message}>You are not signed in</p>
          <button className={styles.button} onClick={() => signIn()}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;
