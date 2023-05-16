import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Page() {
  return (
    <div className="m-2 bg-white">
      <Navbar />
      <div className="flex flex-row mt-16">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
