import { useState } from 'react'
import { useRouter } from 'next/router'

function SignUp() {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setError('')

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone, password }),
    })

    const data = await response.json()

    if (!response.ok) {
      setError(data.message)
      return
    }

    router.push('/auth/signin')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='phone'>Phone:</label>
        <input
          type='text'
          id='phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
      <button type='submit'>Sign Up</button>
    </form>
  )
}

export default SignUp
