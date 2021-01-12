import Link from 'next/link'

const Home = () => {
  return (
    <>
      <h1>Todos API Example</h1>
      <Link href="todo">
          <button>Goto todos page</button>
      </Link>
    </>
  )
}

export default Home
