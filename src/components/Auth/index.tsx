// pages/auth/signin.tsx
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import styles from '@/components/index.module.css' // Import the styles

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
  }

  return (
    <div className={styles.container}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button type='submit' className={styles.button}>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignIn
