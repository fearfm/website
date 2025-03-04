import type {ReactNode} from "react";

interface IProps {
  children: ReactNode;
}

export default function Card({children}: IProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="border-t border-gray-100 p-5 dark:border-gray-800 sm:p-6">
        <div className="max-w-full overflow-x-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}