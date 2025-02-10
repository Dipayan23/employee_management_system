import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/cREATEtASK.JSX";
import AllTask from "../others/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full ">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
