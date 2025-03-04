import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react"
import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import DailySalesTrend from "../components/sales/DailySalesTrend"
import { motion } from "framer-motion"
import SalesOverviewChart from "../components/sales/SalesOverviewChart"
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart"

const SalesPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title="Sales Dashboard" />
        <main className='max-w-7xl mx-auto px-4 py-6 lg:px-8'>

{/* StatCard */}
<motion.div
  className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8'
  initial={{ opacity: 0  , y: 20}}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }} 
  >
    <StatCard name='Total Revenue' icon={DollarSign} value='1665,27 DZ' color='#6366F1' />
    <StatCard name='Avg. Order Value' icon={ShoppingCart} value='15,234 DZ' color='#8B5CF6' />
    <StatCard name='Conversion Rate' icon={TrendingUp} value='5.67 %' color='#EC4899' />
    <StatCard name='Sales Growth' icon={CreditCard} value='12.5 %' color='#10B981' />
</motion.div>
<SalesOverviewChart/>

{/* Charts */}
<div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
  <SalesByCategoryChart/>
  <DailySalesTrend/>

</div>

</main>
    </div>
  )
}

export default SalesPage