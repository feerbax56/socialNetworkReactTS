import classes from './ProfileInfo.module.css'
import React from 'react';
import preloader from '../../../assets/img/loading-gif.gif';
import avatar from '../../../assets/img/avatar.jpg';
import {UserType} from '../../../redux/usersReducer';


const ProfileInfo = (props: UserType) => {
    if (!props.id) {
        return <img src={preloader} alt={'preloader'} style={{width: '350px'}}/>
    }

    return (<>
        <div className={classes.imgDiv}>
            <img className={classes.img}
                 src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Arenal_0.jpg"
                 alt="Earth"></img>
        </div>
        <div className={classes.description}>
            <img src={props.photos.large !== null ? props.photos.large : avatar} alt=""/>

            {props.status && <div>{props.status}</div>}
        </div>
    </>)
}


export default ProfileInfo;