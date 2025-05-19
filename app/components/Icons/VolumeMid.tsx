interface IProps extends React.SVGProps<SVGSVGElement> {}

export default function VolumeMid({...rest}: IProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" {...rest}><path fill="currentColor" fill-rule="evenodd" d="M10.005 4.659c1.451-1.29 3.745-.26 3.745 1.681v11.32c0 1.941-2.294 2.971-3.745 1.681l-3.196-2.84H4.75a2.25 2.25 0 0 1-2.25-2.25v-4.5A2.25 2.25 0 0 1 4.75 7.5h2.059zM12.25 6.34a.75.75 0 0 0-1.248-.56l-3.41 3.03a.75.75 0 0 1-.498.19H4.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.344a.75.75 0 0 1 .498.19l3.41 3.03a.75.75 0 0 0 1.248-.56z" clip-rule="evenodd"/><path fill="currentColor" d="M17.077 15.164c1.561-1.739 1.561-4.588 0-6.327a.75.75 0 1 1 1.116-1.003c2.073 2.31 2.073 6.023 0 8.333a.75.75 0 0 1-1.116-1.003"/><path fill="currentColor" d="M14.985 10.653c.688.765.688 1.93 0 2.695a.75.75 0 0 0 1.116 1.003a3.517 3.517 0 0 0 0-4.7a.75.75 0 0 0-1.116 1.002"/></svg>
  );
}