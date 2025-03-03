import { motion } from "framer-motion"
import { CartesianGrid, LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"


const userGrowthData = [
	{ month: "Jan", users: 1000 },
	{ month: "Feb", users: 1500 },
	{ month: "Mar", users: 2000 },
	{ month: "Apr", users: 3000 },
	{ month: "May", users: 4000 },
	{ month: "Jun", users: 5000 },
];


const UserGrowthChart = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 p-6"
      initial={{ opacity: 0  , y: 20}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        User Growth
      </h2>
      <div className="h-[320px]">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
            <XAxis dataKey={"month"} stroke='#9ca3af' />
            <YAxis stroke='#9ca3af' />
            <Tooltip
              contentStyle={{
              backgroundColor: "rgba(31, 41, 55, 0.8)",
              borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type='monotone'
              dataKey='users'
              stroke='#8B5CF6'
              strokeWidth={2}
              dot={{ fill: "#fff", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
    
  )
}

export default UserGrowthChart