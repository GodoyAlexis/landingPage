function NavBar() {
  return (
    <div className="w-4/5">
      {/*
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      */}
      <div className="relative flex flex-wrap justify-between content-center w-full h-28 border-b">
        <div className="h-[64px] ml-6">
          <div>
            <p className="text-[36px]"> &lt;Alexis Godoy/&gt; </p>
          </div>
        </div>
        <div className="flex flex-wrap content-center space-x-4 text-[14px] mr-6">
          <div>
            <button>Linkedin</button>
          </div>
          <p>/</p>
          <div>
            <button>About</button>
          </div>
          <p>/</p>
          <div>
            <button>Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
