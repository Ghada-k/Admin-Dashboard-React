import { motion } from "framer-motion"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const monthlySalesData = [
	{ month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6000 },
	{ month: "Jun", sales: 5500 },
	{ month: "Jul", sales: 7000 },
];

const SalesOverviewChart = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 p-6"
    initial={{ opacity: 0  , y: 20}}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    >
      <h2>Sales Overview </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={monthlySalesData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
     </div>

    </motion.div>
   
  )
}

export default SalesOverviewChart