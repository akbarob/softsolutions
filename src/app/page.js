import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
