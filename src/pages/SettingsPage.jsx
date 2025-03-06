import Header from "../components/common/Header"
import { motion } from "framer-motion"
import ConnectedAccount from "../components/settings/ConnectedAccount"
import DangerZone from "../components/settings/DangerZone"
import Profile from "../components/settings/Profile"
import Security from "../components/settings/Security"
import Notifications from "../components/settings/Notifications"
const SettingsPage = () => {
  return (
    <motion.div>
      <div className='flex-1 overflow-auto relative z-10'>
        <Header title="Settings" />
      </div>
      <Profile/>
      <Notifications/>
      <Security/>
      <ConnectedAccount/>
      <DangerZone/>
    </motion.div>

  )
}

export default SettingsPage