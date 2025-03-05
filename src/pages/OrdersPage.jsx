import Header from "../components/common/Header"
import { motion } from "framer-motion"
import StatCard from "../components/common/StatCard"
import { CircleCheckBig, Clock4, DollarSign, HandCoins, ShoppingBag } from "lucide-react"
import DailyOrdersChart from "../components/orders/DailyOrdersChart";
import OrderStatusDistribution from "../components/orders/OrderStatusDistribution";
import OrderList from "../components/orders/OrderList";

const orderStats = {
	totalOrders: "1,234",
	pendingOrders: "56",
	completedOrders: "1,178",
	totalRevenue: "9874,76 DZ",
};


const OrdersPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Orders" />
      <main className='max-w-7xl mx-auto px-4 py-6 lg:px-8'>

        {/* StatCard */}
        <motion.div
          className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0  , y: 20}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }} 
          >
            <StatCard name='Total Orders' icon={ShoppingBag} value={orderStats.totalOrders} color='#6366F1' />
            <StatCard name='Pending Orders' icon={Clock4} value={orderStats.pendingOrders} color='#F59E0B' />
            <StatCard name='Completed Orders' icon={CircleCheckBig} value={orderStats.completedOrders} color='#10B981' />
            <StatCard name='Total Revenue' icon={HandCoins} value={orderStats.totalRevenue} color='#EF4444' />
        </motion.div>
    
        {/* Charts */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 mb-8">
          <DailyOrdersChart/>
          <OrderStatusDistribution/>
        </div>
        <OrderList/>
      </main>
    </div>
  )
}

export default OrdersPage