import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"> 
            <p className="blue-gradient_text">MD</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>
                À propos de moi
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>
                Projets
            </NavLink>
            <NavLink to="https://github.com/MarvinDlls" target="_blank" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>
                GitHub
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/marvin-dillenseger/" target="_blank" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>
                LinkedIn
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar;