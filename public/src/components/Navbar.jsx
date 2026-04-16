// components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Settings, 
  LogOut,
  Menu,
  X,
  ChevronDown,
  User
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
    { path: '/documents', label: 'Documents', icon: FileText },
    { path: '/calendar', label: 'Calendrier', icon: Calendar },
    { path: '/settings', label: 'Paramètres', icon: Settings },
  ];

  if (!user) {
    return (
      <nav className="navbar">
        <div className="container navbar-container">
          <Link to="/" className="navbar-brand">
            <span className="brand-text">Strategi</span>
            <span className="brand-highlight">Konseil</span>
          </Link>
          <div className="navbar-menu">
            <Link to="/login" className="btn btn-primary">
              Espace Collaboratif
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar logged-in">
      <div className="container navbar-container">
        <Link to="/dashboard" className="navbar-brand">
          <span className="brand-text">Strategi</span>
          <span className="brand-highlight">Konseil</span>
        </Link>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="navbar-user">
          <div 
            className="user-menu-trigger"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          >
            <div className="user-avatar">
              <User size={20} />
            </div>
            <span className="user-name">{user.name}</span>
            <ChevronDown size={16} className={`dropdown-icon ${isUserMenuOpen ? 'open' : ''}`} />
          </div>

          {isUserMenuOpen && (
            <div className="user-dropdown">
              <div className="dropdown-header">
                <p className="user-email">{user.email}</p>
                <p className="user-company">{user.company}</p>
              </div>
              <div className="dropdown-divider"></div>
              <Link to="/settings" className="dropdown-item">
                <Settings size={16} />
                Paramètres
              </Link>
              <button onClick={handleLogout} className="dropdown-item logout">
                <LogOut size={16} />
                Déconnexion
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;