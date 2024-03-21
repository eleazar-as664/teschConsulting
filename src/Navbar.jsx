import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';
import './Navbar.css'; 

export const Navbar = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", {
      replace: true,
    });
  };
  const items = [
    {
      label: "Inicio",
      icon: "pi pi-fw pi-home",
    },
    {
      label: "Servicios",
      icon: "pi pi-fw pi-cog",
    },
    {
      label: "Acerca de",
      icon: "pi pi-fw pi-info",
    },
    {
      label: "Contacto",
      icon: "pi pi-fw pi-envelope",
    },
  ];

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <nav className="navbar-vertical">
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><Button label="Cerrar sesión" onClick={onLogout} /></li>
      </ul>
    </nav>
      <header>
      
        {user?.profile === "solicitante" && (
          <div className="user">
            <span className="username">Hola Solicitante</span>
           
			
          </div>
        )}
        {user?.profile === "proveedor" && (
          <div className="user">
            <span className="username">Hola Proveedor</span>
            <button className="btn-logout" onClick={onLogout}>
              Cerrar sesión
            </button>
          </div>
        )}
      </header>

      <Outlet />
    </>
  );
};
