import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';


const Profile = () => {

    let adress = 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Arenal_0.jpg'

    let Posts = [
        {id: 1, message: 'Hi', likesCount: 4},
        {id: 1, message: 'Hi, go back!', likesCount: 2},
        {id: 1, message: 'It is good', likesCount: 12},
    ]

    return (
        <div>
            <ProfileInfo
                src={adress}/>
            <MyPosts
                Post={Posts}
            />
        </div>
    )
}


export default Profile;