function NavBar () {
  return (
    <div>
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="absolute flex flex-wrap justify-around content-center w-full h-28">
        <div className="h-[64px] ml-6">
          <div>
            <p className="text-[36px]"> &lt;Alexis Godoy/&gt; </p>
          </div>
        </div>
        <div className="flex flex-wrap content-center space-x-4 text-[26px] mr-6">
          <div>
            <button>About</button>
          </div>
          <div>
            <button>Projects</button>
          </div>
          <div>
            <button>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
