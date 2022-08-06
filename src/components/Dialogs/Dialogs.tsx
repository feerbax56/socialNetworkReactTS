import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    Robot
                </div>
                <div className={classes.dialog + ' ' + classes.active}>
                    BigBurger
                </div>
                <div className={classes.dialog}>
                    Valera
                </div>
                <div className={classes.dialog}>
                    Anton
                </div>
                <div className={classes.dialog}>
                    Pavel
                </div>
                <div className={classes.dialog}>
                    Alex
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