import Page from "~/components/Page";
import Card from "~/components/Card";
import Datatable, {PAGE_SIZE} from "~/components/Datatable";
import {Icon} from "@iconify/react";
import {Avatar} from "@mantine/core";
import type {Route} from './+types/index';
import Button from "~/components/ui/button/Button";
import {href, Link} from "react-router";

const data = [{
  id: '23523-23523-5325235',
  title: 'Fear.FM presents bla in the mix',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5345235',
  title: 'Fear.FM presents bla in the mix2',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5325235',
  title: 'Fear.FM presents bla in the mix3',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5345235',
  title: 'Fear.FM presents bla in the mix2',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5325235',
  title: 'Fear.FM presents bla in the mix3',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5345235',
  title: 'Fear.FM presents bla in the mix2',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5325235',
  title: 'Fear.FM presents bla in the mix3',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5345235',
  title: 'Fear.FM presents bla in the mix2',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5325235',
  title: 'Fear.FM presents bla in the mix3',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5345235',
  title: 'Fear.FM presents bla in the mix2',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5325235',
  title: 'Fear.FM presents bla in the mix3',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5345235',
  title: 'Fear.FM presents bla in the mix2',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5325235',
  title: 'Fear.FM presents bla in the mix3',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5345235',
  title: 'Fear.FM presents bla in the mix2',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5325235',
  title: 'Fear.FM presents bla in the mix3',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5345235',
  title: 'Fear.FM presents bla in the mix2',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5325235',
  title: 'Fear.FM presents bla in the mix3',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5345235',
  title: 'Fear.FM presents bla in the mix2',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5325235',
  title: 'Fear.FM presents bla in the mix3',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5345235',
  title: 'Fear.FM presents bla in the mix2',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5325235',
  title: 'Fear.FM presents bla in the mix3',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5345235',
  title: 'Fear.FM presents bla in the mix2',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5325235',
  title: 'Fear.FM presents bla in the mix3',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5345235',
  title: 'Fear.FM presents bla in the mix2',
  date: new Date(),
  duration: 2355,
},{
  id: '23523-23523-5325235',
  title: 'Fear.FM presents bla in the mix3',
  date: new Date(),
  duration: 2355,
}];

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") ?? "1");

  return {
    page,
  }
}

export default function Index({loaderData}: Route.ComponentProps) {
  const {page} = loaderData;

  return (
    <Page title={"Livesets"}>
      <Card>
        <div className={"pb-6"}>
          <Link to={href("/admin/livesets/add")}><Button size={"sm"}>Add liveset</Button></Link>
        </div>
        <Datatable
          page={page}
          totalRows={data.length}
          data={data.slice(0, PAGE_SIZE)}
          columns={[{
            accessor: 'title',
            title: 'Track',
            render: (row) => {
              return (
                <div className={"flex items-center"}>
                  <Avatar color="cyan" radius="sm">
                    AA
                  </Avatar>
                  <span className="ml-2">{row.title}</span>
                </div>
              );
            },
          }, {
            accessor: 'duration',
            title: 'Duration',
          }, {
            accessor: 'id',
            title: 'Actions',
            render: (row) => {
              return <Icon className="text-2xl cursor-pointer" icon={"material-symbols-light:delete-outline-rounded"} />
            }
          }]}
        />
      </Card>
    </Page>
  );
}
