import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
import {PostsType} from '../../redux/state';


type ProfileType = {
    Posts: Array<PostsType>
    addPost: (message: string) => void
    message: string
    changeNewText: (newText: string) => void
}

const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                Posts={props.Posts}
                addPost={props.addPost}
                message={props.message}
                changeNewText={props.changeNewText}
            />
        </div>
    )
}


export default Profile;