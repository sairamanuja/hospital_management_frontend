import { AdminNav } from "../UI/Navigation/AdminNavbar";
import { SideBar } from "../UI/Sidebar";

export const AdminLayout = ({ children }) => {
  return (
    <div className="">
        <AdminNav />

    <div className="flex flex- md:flex-row ">



      <div className="flex-1 flex flex-row">
      <SideBar />

        <main className="flex-1 flex justify-center items-center p-4 overflow-y-auto bg-gray-100">{children}</main>
      </div>
    </div>
    </div>

  );
};