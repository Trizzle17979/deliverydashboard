import React, { useState } from "react";
import DashboardRibbon from "./DashboardRibbon";

import DashboardHome from "./DashboardHome";
import DashboardAnalytics from "./DashboardAnalytics";
import DashboardTable from "./DashboardTable";

import { connect } from "react-redux";
import { getDeliveryData } from "../../actions";

interface Show {
  home: boolean;
  analytics: boolean;
  table: boolean;
}

interface Props {
  user: string;
}

const Dashboard: React.FC<Props> = ({ user }) => {
  const [show, setShow] = useState<Show>({
    home: true,
    analytics: false,
    table: false,
  });

  return (
    <div className="px-24 py-8 min-h-screen">
      <DashboardRibbon />
      <div className="grid grid-cols-4 gap-8">
        <div className="col-start-1 col-end-2 space-y-2 flex flex-col">
          <button
            onClick={() => {
              setShow({
                home: true,
                analytics: false,
                table: false,
              });
            }}
            className={`py-1 px-3 ${show.home && "bg-blue-500 text-white"} ${
              !show.home && "hover:bg-blue-200"
            } rounded-full`}
          >
            Home
          </button>
          <button
            onClick={() => {
              setShow({
                home: false,
                analytics: true,
                table: false,
              });
            }}
            className={`py-1 px-3 rounded-full ${
              show.analytics && "bg-blue-500 text-white"
            } ${!show.analytics && "hover:bg-blue-200"}`}
          >
            Analytics
          </button>
          <button
            onClick={() => {
              setShow({
                home: false,
                analytics: false,
                table: true,
              });
            }}
            className={`py-1 px-3 rounded-full ${
              show.table && "bg-blue-500 text-white"
            } ${!show.table && "hover:bg-blue-200"}`}
          >
            Table
          </button>
        </div>
        <div className="col-start-2 col-end-5">
          {show.home && <DashboardHome />}
          {show.analytics && <DashboardAnalytics />}
          {show.table && <DashboardTable />}
        </div>
      </div>
    </div>
  );
};

interface mappedInterface {
  user: string;
  isFetching: boolean;
  error: string;
  isLoggedIn: boolean;
}

const mapStateToProps = (state: mappedInterface) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Dashboard);
