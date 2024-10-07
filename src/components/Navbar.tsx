import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Trophy, BarChart3, Menu, X } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const teamLogo = "https://www-football--loisir--amateur-com.translate.goog/Content/images/LogoTeam/IMG_4511.png?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=fr&_x_tr_hl=fr&_x_tr_pto=wapp"

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={teamLogo} 
            alt="FC TETE CRAMEE Logo" 
            className="w-10 h-10 mr-2 rounded-full"
          />
          <div className="text-orange-500 font-bold text-xl">FC TETE CRAMEE</div>
        </Link>
        
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden md:flex space-x-6">
          <NavItem to="/matches" icon={Calendar} text="Matchs" />
          <NavItem to="/classement" icon={Trophy} text="Classement" />
          <NavItem to="/statistiques" icon={BarChart3} text="Statistiques" />
        </ul>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 mt-4">
            <NavItem to="/matches" icon={Calendar} text="Matchs" />
            <NavItem to="/classement" icon={Trophy} text="Classement" />
            <NavItem to="/statistiques" icon={BarChart3} text="Statistiques" />
          </ul>
        </div>
      )}
    </nav>
  )
}

const NavItem: React.FC<{ to: string; icon: React.ElementType; text: string }> = ({ to, icon: Icon, text }) => (
  <li>
    <Link to={to} className="flex items-center text-white hover:text-orange-500 transition-colors">
      <Icon className="mr-2" size={20} />
      {text}
    </Link>
  </li>
)

export default Navbar