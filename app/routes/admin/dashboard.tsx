import CurrentListenerChart from "~/routes/admin/components/CurrentListenerChart";
import RecentTracksChart from "~/routes/admin/components/RecentTracksChart";

export function Dashboard() {
  return (
    <>
      {/*<PageMeta*/}
      {/*  title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"*/}
      {/*  description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"*/}
      {/*/>*/}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-4 space-y-6">
          <CurrentListenerChart />
        </div>
        <div className="col-span-8 space-y-6">
          <RecentTracksChart />
        </div>
      </div>
    </>
  );
}
