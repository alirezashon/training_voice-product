import { getSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { signOut } from 'next-auth/react'

function ProtectedRoute() {
  const handleLogout = () => {
    signOut({ callbackUrl: '/signin' })
  }

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
        destination: '/signin',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

export default ProtectedRoute
