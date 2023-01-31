import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../content/images/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <>
        <div className="navigation">
            <Link to="/" className="logo-container">
                <div className=""><CrwnLogo className="logo" /></div>
            </Link>
            <div className="nav-links-container">
                <Link to="/shop" className="nav-link">Shop</Link>
            </div>
        </div>
         <Outlet />
         </>
    )
}

export default Navigation;