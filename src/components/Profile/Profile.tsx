import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';

const Profile: React.FC<ProfileType> = (props) => {

   return (
        <div>
            <ProfileInfo
                src={props.address}/>
            <MyPosts
                Posts={props.Posts}
            />
        </div>
    )
}


export default Profile;