import classes from './ProfileInfo.module.css'


type ProfileInfo = {
    src: string
}

const ProfileInfo: React.FC<ProfileInfo> = (props) => {
    return (<>
        <div className={classes.imgDiv}>
            <img className={classes.img}
                 src={props.src}
                 alt="Earth"></img>
        </div>
        <div className={classes.description}>
            ava + description
        </div>
    </>)
}


export default ProfileInfo;