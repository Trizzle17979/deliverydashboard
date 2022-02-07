import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddDelivery from "./AddDelivery";

import { connect } from "react-redux";

interface Props {
  user: User;
}

interface User {
  email: string;
  user_metadata: {
    first_name: string;
    last_name: string;
  };
}

const DashboardRibbon: React.FC<Props> = ({ user }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  console.log(user);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="flex flex-col gap-4">
      {user && (
        <p className="flex justify-end">
          Welcome {user.user_metadata.first_name} {user.user_metadata.last_name}
        </p>
      )}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleShowModal}
          className="text-white py-3 px-6 bg-blue-500 rounded-md hover:bg-blue-400"
        >
          New Delivery
        </button>
        <NavLink
          to="/profile"
          className="text-white py-3 px-6 bg-red-500 rounded-md hover:bg-red-400 ml-4"
        >
          Profile
        </NavLink>
        <AddDelivery showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

interface mappedInterface {
  user: User;
  isFetching: boolean;
  error: string;
  isLoggedIn: boolean;
}

const mapStateToProps = (state: mappedInterface) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(DashboardRibbon);
