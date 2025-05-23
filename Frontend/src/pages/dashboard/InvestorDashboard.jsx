import Card from "../../components/Card"
import "./Dashboard.css"
import { Outlet } from "react-router"
import { useMatch } from "react-router"

function InvestorDashboard() {
  const match = useMatch("/dashboard/investor")
  return (
      <div className="investorContainer">

        {match && (
          <>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </>
        )}
        <Outlet />
      </div>
  )
}

export default InvestorDashboard
