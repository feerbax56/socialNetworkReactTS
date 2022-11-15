import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (<>
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialog' activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/news'>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/music'> Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/setting'>Setting</NavLink>
                </div>

                <div className={classes.item}>
                    <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar;