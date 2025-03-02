import { BarChart2, ShoppingBag, UserCheck, UserPlus, Users, UserX } from "lucide-react"
import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import { motion } from "framer-motion"
import UsersTable from "../components/users/UsersTable"
import UserGrowthChart from "../components/users/UserGrowthChart"
import UserActivityHeatmap from "../components/users/UserActivityHeatmap"
import UserDemographicsChart from "../components/users/UserDemographicsChart"
const UsersPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title="Users" />
        <main className='max-w-7xl mx-auto px-4 py-6 lg:px-8'>

          {/* StatCard */}
          <motion.div
            className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{ opacity: 0  , y: 20}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }} 
            >
              <StatCard name='Total Users' icon={Users} value='152845' color='#6366F1' />
              <StatCard name='New Users Today' icon={UserPlus} value='234' color='#10B981' />
              <StatCard name='Active Users' icon={UserCheck} value='56752' color='#F59E0B' />
              <StatCard name='Churn Rate' icon={UserX} value='2.5 %' color='#EF4444' />
          </motion.div>
          <UsersTable/>

          {/* User Charts */}
          <div>
            <UserGrowthChart/>
            <UserActivityHeatmap/>
            <UserDemographicsChart/>
          </div>
        </main>
    </div>
  )
}

export default UsersPage