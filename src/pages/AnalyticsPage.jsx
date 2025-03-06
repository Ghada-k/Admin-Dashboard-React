import OverviewCards from "../components/analytics/OverviewCards"
import RevenueChart from "../components/analytics/RevenueChart"
import Header from "../components/common/Header"

const AnalyticsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title={"Analytics Dashboard"} />
        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
          <OverviewCards/>
          <RevenueChart/>
        </main>
    </div>
  )
}

export default AnalyticsPage