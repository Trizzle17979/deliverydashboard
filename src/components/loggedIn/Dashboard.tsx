import React, { useState } from "react";
import DashboardRibbon from "./DashboardRibbon";

import DashboardHome from "./DashboardHome";
import DashboardAnalytics from "./DashboardAnalytics";
import DashboardTable from "./DashboardTable";
import NavbarVertical from "./NavbarVertical";

import { connect } from "react-redux";
import { MappedInterface, User } from "../../types";

interface Show {
  home: boolean;
  analytics: boolean;
  table: boolean;
}

interface Props {
  user: User;
}

const Dashboard: React.FC<Props> = ({ user }) => {
  const [show, setShow] = useState<Show>({
    home: true,
    analytics: false,
    table: false,
  });

  return (
    <div className="flex">
      <NavbarVertical setShow={setShow} />
      <div className="px-4 py-4 min-h-screen w-full">
        <DashboardRibbon />
        <div className="col-start-2 col-end-5">
          {show.home && <DashboardHome />}
          {show.analytics && <DashboardAnalytics />}
          {show.table && <DashboardTable />}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: MappedInterface) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Dashboard);
