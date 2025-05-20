interface IProps extends React.SVGProps<SVGSVGElement> {}

export default function VolumeOff({...rest}: IProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" {...rest}><path fill="currentColor" fillRule="evenodd" d="M10.005 4.659c1.451-1.29 3.745-.26 3.745 1.681v11.32c0 1.941-2.294 2.971-3.745 1.681l-3.196-2.84H4.75a2.25 2.25 0 0 1-2.25-2.25v-4.5A2.25 2.25 0 0 1 4.75 7.5h2.059zM12.25 6.34a.75.75 0 0 0-1.248-.56l-3.41 3.03a.75.75 0 0 1-.498.19H4.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.344a.75.75 0 0 1 .498.19l3.41 3.03a.75.75 0 0 0 1.248-.56z" clipRule="evenodd"/></svg>
  );
}