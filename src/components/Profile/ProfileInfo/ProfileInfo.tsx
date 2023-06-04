import classes from './ProfileInfo.module.css'
import React from 'react';
import preloader from '../../../assets/img/loading-gif.gif';
import avatar from '../../../assets/img/avatar.jpg';
import {ProfileType} from '../../../redux/profileReducer';


const ProfileInfo = ({profile}: { profile: ProfileType | null }) => {
    if (!profile?.userId) {
        return <img src={preloader} alt={'preloader'} style={{width: '350px'}}/>
    }

    return (<>
        <div className={classes.imgDiv}>
            <img className={classes.img}
                 src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Arenal_0.jpg"
                 alt="Earth"></img>
        </div>
        <div className={classes.description}>
            <img src={profile?.photos.large !== null ? profile?.photos.large : avatar} alt=""/>

            {profile?.lookingForAJob && <div>{profile?.lookingForAJob}</div>}
        </div>
    </>)
}


export default ProfileInfo;