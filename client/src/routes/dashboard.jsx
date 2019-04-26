import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";

const dashboardRoutes = [
  {
    path: "/user",
    name: "Paciente",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/table",
    name: "Historia Clinica",
    icon: "pe-7s-note2",
    component: TableList
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
