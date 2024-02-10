import NavBar from './NavBar'

function MainContainer () {
  return (
    <div className='h-dvh bg-[url("../public/coding.jpg")] bg-center bg-cover'>
      <NavBar />
      <div className="relative flex flex-col justify-center">
        <h1>Hi! I'm</h1>
        <h2>Alexis Godoy</h2>
        <h2>Frontend Developer</h2>
      </div>
    </div>
  )
}

export default MainContainer
