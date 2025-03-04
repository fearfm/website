import Navbar from "~/routes/admin/components/Navbar";
import Sidebar from "~/routes/admin/components/Sidebar";
import {Outlet} from "react-router";
import {MantineProvider} from "@mantine/core";
import '~/admin.css';
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';

export function Layout() {
  return (
    <MantineProvider>
      <div className="min-h-screen xl:flex">
        <div>
          <Sidebar />
        </div>
        <div
          className={`flex-1 transition-all duration-300 ease-in-out lg:ml-[290px]`}
        >
          <Navbar />
          <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
