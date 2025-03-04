import type {ReactNode} from "react";

interface IProps {
  title: string;
  children: ReactNode;
}

export default function Page({children, title}: IProps) {
  return (
    <>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">{title}</h2>
          {/*<nav>*/}
          {/*  <ol className="flex items-center gap-1.5">*/}
          {/*    <li>*/}
          {/*      <a className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"*/}
          {/*         href="index.html">*/}
          {/*        Home*/}
          {/*        <svg className="stroke-current" width="17" height="16" viewBox="0 0 17 16" fill="none"*/}
          {/*             xmlns="http://www.w3.org/2000/svg">*/}
          {/*          <path d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366" stroke="" stroke-width="1.2"*/}
          {/*                stroke-linecap="round" stroke-linejoin="round"></path>*/}
          {/*        </svg>*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li className="text-sm text-gray-800 dark:text-white/90" x-text="pageName">Basic Tables</li>*/}
          {/*  </ol>*/}
          {/*</nav>*/}
        </div>
      </div>
      <div className="space-y-5 sm:space-y-6">
        {children}
      </div>
    </>
  );
}