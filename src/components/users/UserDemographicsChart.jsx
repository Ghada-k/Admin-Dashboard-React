import { motion } from "framer-motion"

const UserDemographicsChart = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 p-6"
      initial={{ opacity: 0  , y: 20}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        User Demographics
      </h2>
      <div className="h-80">
          

      </div>

    </motion.div>
  )
}

export default UserDemographicsChart