import React, { useContext } from 'react';
import { MainContext } from '../../MainContext';
import { Home, DashboardOutlined, Help} from '@mui/icons-material'
import { Link } from 'react-router-dom';
import './Drawer.css';

const Drawer = () => {
    const { drawerOpen } = useContext(MainContext)
    return (
        <div className='drawer'
            style={{
                width: !drawerOpen ? '0px' : '250px'
            }}>
            <div className="drawer__content"
            style={{
                opacity: !drawerOpen?0:1
            }}>
                <Link to="/" className='drawer__content__item'>
                    <Home style={{fontSize:32, color:'#fff', marginRight:'30px'}}/>
                    <p className='drawer__content__item__header'>Home</p>
                </Link>
                <Link to="/dashboard" className='drawer__content__item'>
                    <DashboardOutlined style={{fontSize:32, color:'#fff', marginRight:'30px'}}/>
                    <p className='drawer__content__item__header'>Dashboard</p>
                </Link>
                <Link to="/help" className='drawer__content__item'>
                    <Help style={{fontSize:32, color:'#fff', marginRight:'30px'}}/>
                    <p className='drawer__content__item__header'>How to play</p>
                </Link>
            </div>
        </div>
    )
}

export default Drawer