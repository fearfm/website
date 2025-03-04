import type {ReactNode} from "react";
import {Link} from "react-router";
import {twMerge} from "tailwind-merge";

interface IProps {
  page: number;
  value?: ReactNode;
  active: boolean;
  disabled: boolean;
}

export default function PaginationButton({value, page, active, disabled}: IProps) {
  const listStyle = 'flex items-center justify-center w-10 h-10 rounded-lg font-medium';

  if (disabled) {
    return <li className={twMerge(
      listStyle,
      "text-gray-300"
    )}>{value ? value : page}</li>;
  }
  return (
    <Link to={`?page=${page}`} className={twMerge(
      listStyle,
      "text-theme-sm hover:bg-brand-500/[0.08] hover:text-brand-500 dark:text-brand-500 dark:hover:text-brand-500 ",
      active ? 'text-brand-500 bg-brand-500/[0.08]' : '',
    )}>
      <li>
        {value ? value : page}
      </li>
    </Link>
  );

}