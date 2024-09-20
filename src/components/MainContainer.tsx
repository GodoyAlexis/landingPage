import NavBar from "./NavBar";

function MainContainer() {
  return (
    <div className='h-dvh bg-[url("../public/dark.jpg")] bg-center bg-cover flex-wrap justify-center'>
      <div className="w-full h-28 flex justify-center">
        <NavBar />
      </div>
      <div className="flex flex-wrap justify-center m-16">
        <div className="w-40">
          <div className="w-32 h-32 bg-cover bg-center bg-[url('../public/ale.jpg')] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
