import {href, Link, type MetaFunction, Outlet} from "react-router";
import Logo from "~/components/Logo";
import {Icon} from "@iconify/react";
import "~/app.css";
import PlayerProvider from "~/components/PlayerProvider";
import useDeviceDetect from "~/hooks/useDeviceDetect";
import {twMerge} from "tailwind-merge";
import {useEffect, useState} from "react";
import type {Socket} from "socket.io-client";
import {connect} from "~/socket/ws.client";
import {wsContext} from "~/socket/ws.context";
import {TooltipProvider} from "@radix-ui/react-tooltip";

export const meta: MetaFunction = () => {
  return [
    {title: "Fear.FM - Be Proud and Listen Loud"},
    {
      name: "description",
      content: "Internet radio Fear.FM",
    },
  ];
};

export default function Index() {
  const {isMobile} = useDeviceDetect();

  const [socket, setSocket] = useState<Socket | null>(null);
  useEffect(() => {
    const connection = connect();
    if (connection) {
      setSocket(connection);
    }
    return () => {
      if (connection) {
        connection.close();
      }
    };
  }, []);

  return (
    <PlayerProvider>
      <TooltipProvider>
        <wsContext.Provider value={socket}>
          <header
            className={
              "text-xl xs:text-3xl px-4 py-4 h-16 fixed top-0 w-full flex items-center bg-[#000918]"
            }
          >
            <div className={"w-44"}>
              <Link to={"/"} className={"fill-white"}>
                <Logo/>
              </Link>
            </div>
            <div className={"flex grow gap-4 text-gray-400 justify-end"}>
              <Link
                target={"_blank"}
                rel="noopener noreferrer"
                className="duration-300 hover:text-gray-100"
                to={"https://facebook.com/Fear.FM"}
              >
                <Icon icon={"lineicons:facebook-rounded"}/>
              </Link>
              <Link
                target={"_blank"}
                rel="noopener noreferrer"
                className="duration-300 hover:text-gray-100"
                to={"https://instagram.com/fearfmofficial"}
              >
                <Icon icon={"lineicons:instagram"}/>
              </Link>
            </div>
          </header>
          <main
            className={twMerge(
              "flex mt-16 h-[calc(100vh-12rem)]",
              isMobile ? "" : "p-4"
            )}
          >
            <Outlet/>
          </main>
          {!isMobile && (
            <footer
              className={
                "fixed bottom-0 p-4 w-full bg-[#000918] uppercase text-xs"
              }
            >
              <ul className={"mb-2 flex gap-4 list-none list-outside"}>
                <Link
                  target="_blank"
                  to="https://fearfm.atlassian.net/servicedesk/customer/portal/1"
                >
                  <li>Contact</li>
                </Link>
                <Link to={href("/terms-and-conditions")}>
                  <li>Terms and conditions</li>
                </Link>
                <Link to={href("/privacy-policy")}>
                  <li>Privacy policy</li>
                </Link>
              </ul>
              &copy; 2025 Fear.FM
            </footer>
          )}
        </wsContext.Provider>
      </TooltipProvider>
    </PlayerProvider>
  );
}
