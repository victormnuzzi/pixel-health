import { useEffect, useState } from 'react';

import { IoMenu as MenuToggleIcon } from "react-icons/io5";
import { MdOutlineEmail as EmailIcon } from "react-icons/md";
import { FaRegUser as UserIcon } from "react-icons/fa";
import { CiLogout as LogoutIcon } from "react-icons/ci";

import LogoImg from '../assets/img/logo.png'

function Nav(){

    const getUser = sessionStorage.getItem('usuario');
    const getPassword = sessionStorage.getItem('senha');

    const handleLogout = async () => {
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('senha');
        alert("Saindo da sessão.");
        window.location.reload()
    }

    const menuToggle = () => {
        document.querySelector('.menu-info').classList.toggle('active')
    }

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/usuarios')
            .then((resposta) => {
                return resposta.json();
            })
            .then((resposta) => {
                setUsuarios(resposta);
            })
    }, []);

    let usuarioAtual = null;

    for (const usuarioDados of usuarios) {
        console.log("getUser:", getUser);
        console.log("usuarioDados.usuario:", usuarioDados.usuario);

        if (getUser === usuarioDados.usuario) {
            usuarioAtual = usuarioDados;
            break;
        }
    }

    return(
        <>
            <header className='header'>

                <div className="header-brand">
                    <div className='header-brand-img'>
                        <img src={LogoImg} alt="Logo do Pixel Health" />
                    </div>
                    <h2>Pixel Health</h2>
                </div>

                <nav className='header-menu'>
                    <ul>
                    {getUser && getPassword && usuarioAtual ? (
                        <>
                            <li className='user-info'><UserIcon /> {usuarioAtual.usuario}</li>
                            <li className='user-info'><EmailIcon /> {usuarioAtual.email}</li>
                            <li>
                                <div className='menu-container'>
                                    <div onClick={menuToggle} className='menu-toggle'>
                                        <MenuToggleIcon className="menu-icon"/>
                                    </div>
                                    <div className='menu-info'>
                                        <h3>Informações do Usuário</h3>
                                        <ul className='menu-user-info'>
                                            <li className='menu-user-info-li'><UserIcon id='icon' /> <p>{usuarioAtual.usuario}</p></li>
                                            <li className='menu-user-info-li no-border'><EmailIcon id='icon' /> <p>{usuarioAtual.email}</p></li>
                                            <li onClick={handleLogout} className='menu-logout'><LogoutIcon id='icon' /> <p>Logout</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li><button onClick={handleLogout} className='logout-btn'>Logout</button></li>
                        </>
                        
                        ) : null}
                        </ul>
                    </nav>
                    

            </header>
        </>
    )
}

export default Nav