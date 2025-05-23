import Card from "../../components/Card"
import "./Dashboard.css"
import { Outlet, useMatch } from "react-router"

function EntrepreneurDashboard() {

  const match = useMatch("/dashboard/entrepreneur")

  return (
    <div className="entrepreneurContainer">
      {match&&(
        <Card/>
      )}
      <Outlet/>
    </div>
  )
}

export default EntrepreneurDashboard
