import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
import {PostsType} from '../../redux/state';



type ProfileType = {
    Posts: Array<PostsType>
}

const Profile: React.FC<ProfileType> = (props) => {

   return (
        <div>
            <ProfileInfo/>
            <MyPosts
                Posts={props.Posts}
            />
        </div>
    )
}


export default Profile;