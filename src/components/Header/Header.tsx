import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {UserDataType} from '../../redux/auth-reducer';


const Header = (props: UserDataType) => {
    return (<header className={classes.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg" alt="logo"></img>
        <div className={classes.LoginBlock}>
            {props.isAuth ? <div>{props.login}</div> :
                <NavLink to={'/login'}>Login</NavLink>
            }


        </div>
    </header>)
}

export default Header;