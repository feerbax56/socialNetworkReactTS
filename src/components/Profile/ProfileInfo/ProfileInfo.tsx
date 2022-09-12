import classes from './ProfileInfo.module.css'
import React from 'react';




const ProfileInfo = () => {
    return (<>
        <div className={classes.imgDiv}>
            <img className={classes.img}
                 src='https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Arenal_0.jpg'
                 alt="Earth"></img>
        </div>
        <div className={classes.description}>
            ava + description
        </div>
    </>)
}


export default ProfileInfo;