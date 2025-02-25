
import TopNav from "./topnav/TopNav"
import BottomNav from "./bottomnav/BottomNav"

function Navbar() {
  return (
    <header className="bg-primaryBg">
        <nav className="container px-6 mx-auto relative">
            {/* Top Nav => Logo + Account + Shopiing Cart*/}
            <TopNav />
            {/* Bottom Nav => Search Icon + Categories Toggler */}
            <BottomNav />
        </nav>
    </header>
  )
}

export default Navbar
