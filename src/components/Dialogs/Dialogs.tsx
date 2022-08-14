import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1">Robot</NavLink>
                </div>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to="/dialogs/2">BigBurger</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Valera</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Anton</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">Pavel</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/6">Alex</NavLink>
                </div>
                <div className={classes.dialog}>
                    Sveta
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>opapa</div>
                <div className={classes.message}>youuuuu</div>
            </div>
        </div>)
}

export default Dialogs;