import {href, Link, type MetaFunction, Outlet} from "react-router";
import Logo from "~/components/Logo";
import {Icon} from "@iconify/react";
import { MantineProvider} from "@mantine/core";
import '~/app.css';
import '@mantine/core/styles.css';
import PlayerProvider from "~/components/PlayerProvider";

export const meta: MetaFunction = () => {
  return [
    {title: "Fear.FM - Be Proud and Listen Loud"},
    {
      name: "description",
      content: "Internet radio Fear.FM",
    },
  ];
};

export async function loader() {
  return {}
}

export default function Index() {
  return (
    <PlayerProvider>
      <MantineProvider>
        <header className={"p-8 fixed bg-[#000918] top-0 w-full flex justify-between"}>
          <div className={"w-64"}>
            <Link to={"/"} className={"fill-white"}>
              <Logo/>
            </Link>
          </div>
          <div className={"flex gap-4 text-gray-400 -100 text-3xl"}>
            <Link target={"_blank"} rel="noopener noreferrer" className="duration-300 hover:text-gray-100"
                  to={"https://youtube.com/fearfm"}><Icon icon={"lineicons:youtube"}/></Link>
            <Link target={"_blank"} rel="noopener noreferrer" className="duration-300 hover:text-gray-100"
                  to={"https://facebook.com/Fear.FM"}><Icon icon={"lineicons:facebook-rounded"}/></Link>
            <Link target={"_blank"} rel="noopener noreferrer" className="duration-300 hover:text-gray-100"
                  to={"https://instagram.com/fearfmofficial"}><Icon icon={"lineicons:instagram"}/></Link>
          </div>
        </header>
        <main
          className={"flex flex-col p-8 w-full pt-24 pb-16 h-screen"}
        >
          <Outlet/>
        </main>
        <footer className={"fixed bottom-0 p-8 w-full bg-[#000918] uppercase text-xs"}>
          <ul className={"mb-2 flex gap-4 list-none list-outside"}>
            <Link target="_blank" to="https://fearfm.atlassian.net/servicedesk/customer/portal/1">
              <li>Contact</li>
            </Link>
            <Link to={href('/terms-and-conditions')}>
              <li>Terms and conditions</li>
            </Link>
            <Link to={href('/privacy-policy')}>
              <li>Privacy policy</li>
            </Link>
            <Link to={href('/admin/livesets')}>
              <li>Login</li>
            </Link>
          </ul>
          &copy; 2025 Fear.FM
        </footer>
      </MantineProvider>
    </PlayerProvider>
  );
}
