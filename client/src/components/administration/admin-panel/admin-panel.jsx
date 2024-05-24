import "./admin-panel.scss";
import "react-tabs/style/react-tabs.css";

import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DataTable from "react-data-table-component";
import Request from "../request/request";
import EditUserModal from "../../modals/edit-user-modal";
import requestService from "../../../services/request-service";
import userService from "../../../services/user-service";

const AdminPanel = () => {
  let [requests, setRequests] = useState([]);
  let [users, setUsers] = useState([]);

  const updateUser = (id, newUser) => {
    setUsers((users) => {
      return users.map((user) => {
        if (user._id === id) {
          return newUser;
        } else {
          return user;
        }
      });
    });
  };
  const requestColumns = [
    {
      name: "Brand",
      selector: "brand",
      sortable: true,
    },
    {
      name: "Model",
      selector: "model",
      sortable: true,
    },
    {
      name: "Year",
      selector: "year",
      sortable: true,
    },
    {
      name: "Condition",
      selector: "condition",
      sortable: true,
    },
    {
      name: "Status",
      selector: "status",
      sortable: true,
      className: "status",
    },
  ];

  const userColumns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Phone",
      selector: "phone",
      sortable: true,
    },
    {
      name: "",
      cell: (data) => <EditUserModal user={data} updateUser={updateUser} />,
    },
  ];

  const conditionalRowStyles = [
    {
      when: (row) => row.status === "Pending",
      style: {
        backgroundColor: "rgba(240,219,8,0.2)",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    {
      when: (row) => row.status === "Approved",
      style: {
        backgroundColor: "rgba(8, 240, 53, 0.2)",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    {
      when: (row) => row.status === "Rejected",
      style: {
        backgroundColor: "rgba(240, 8, 45, 0.2)",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    {
      when: (row) => row.status === "Completed",
      style: {
        backgroundColor: "rgba(8, 159, 240, 0.2)",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  ];

  const ExpanableRequestRow = ({ data }) => {
    return <Request {...data} />;
  };

  useEffect(() => {
    requestService.getRequest("all").then((res) => {
      setRequests(res);
    });
    userService.getUser("all").then((res) => {
      setUsers(res);
    });
  }, []);

  return (
    <div className="admin-panel">
      <Tabs>
        <TabList>
          <Tab>Requests</Tab>
          <Tab>Users</Tab>
        </TabList>

        <TabPanel>
          {requests.length > 0 ? (
            <DataTable
              columns={requestColumns}
              data={requests}
              responsive
              defaultSortField
              pagination
              paginationRowsPerPageOptions={[2, 5, 10, 15, 20, 25, 30]}
              pointerOnHover
              expandableRows
              expandableRowDisabled={(row) => row.disabled}
              expandableRowsComponent={<ExpanableRequestRow />}
              conditionalRowStyles={conditionalRowStyles}
            />
          ) : (
            "No current requests"
          )}
        </TabPanel>
        <TabPanel>
          {users.length > 0 ? (
            <DataTable
              columns={userColumns}
              data={users}
              responsive
              defaultSortField
              pagination
              paginationRowsPerPageOptions={[2, 5, 10, 15, 20, 25, 30]}
              pointerOnHover
            />
          ) : (
            "No registered users"
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AdminPanel;
