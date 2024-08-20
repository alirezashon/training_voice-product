import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/router'

const SignIn = () => {
  const [phone, setPhone] = useState<number>()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setError('')

    const result = await signIn('credentials', {
      redirect: false,
      phone,
      password,
    })

    if (result?.error) {
      setError(result.error)
      return
    }

    router.replace('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='phone'>Phone:</label>
        <input
          type='text'
          id='phone'
          value={phone}
          onChange={(e) => setPhone(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button type='submit'>Sign In</button>
    </form>
  )
}

export default SignIn
