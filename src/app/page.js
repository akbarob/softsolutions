import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Page() {
  return (
    <div className="m-2 bg-white flex flex-col">
      <Navbar />
      <div className=" flex flex-row mt-16  lg:mx-32 mb-12 ">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
