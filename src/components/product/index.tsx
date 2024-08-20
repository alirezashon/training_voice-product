import { getSession, signOut } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { useEffect } from 'react'

const ProtectedRoute = () => {
  const handleLogout = async () => {
    await signOut({ redirect: false })
    document.cookie = 'next-auth.session-token=; Max-Age=0; path=/;' 
    window.location.href = '/Auth'
  }

  useEffect(() => {
    ;(async () => {
      const session = await getSession()
      if (!session) {
        window.location.href = '/Auth'
      }
    })()
  }, [])

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <h1>Protected Content</h1>
      <p>You are logged in and can see this content.</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/Auth',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

export default ProtectedRoute
