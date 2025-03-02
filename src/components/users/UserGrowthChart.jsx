import { motion } from "framer-motion"
import { LineChart } from "lucide-react"
import { CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"


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
            <h2 className="text-lg font-medium mb-4 text-gray-100">
                User Growth
            </h2>
            <div className="h-80">
                
    
            </div>
    
        </motion.div>
    
  )
}

export default UserGrowthChart