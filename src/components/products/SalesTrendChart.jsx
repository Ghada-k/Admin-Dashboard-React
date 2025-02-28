import { motion } from "framer-motion"
import {  LineChart ,CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts"

const salesData = [
	{ month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6800 },
	{ month: "Jun", sales: 5500 },
];
const SalesTrendChart = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 p-6"
    initial={{ opacity: 0  , y: 20}}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    >
        <h2 className="text-lg font-medium mb-4 text-gray-100">
            Sales Trend
        </h2>
        <div className="h-80">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart data={salesData}>
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
                    <Legend />
                    <Line
                        type='monotone'
                        dataKey='sales'
                        stroke='#8B5CF6'
                        strokeWidth={3}
                        dot={{ fill: "#fff", strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, strokeWidth: 2 }}
                    />
                </LineChart>
            
            </ResponsiveContainer>

        </div>

    </motion.div>

  )
}

export default SalesTrendChart