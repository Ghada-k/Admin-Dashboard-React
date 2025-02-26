
const Header = ( {title}) => {
  return (
    // icon next to name : flex flex-row
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg h-fit border-b border-gray-700 px-20 py-4 text-lg">
        {/* <div className="pr-4 text-indigo-500">{icon}</div> */}
        {title}
    </header>
    
  )
}

export default Header