import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React, {ChangeEvent} from 'react';
import {PostsType} from '../../../redux/state';

type MyPostsType = {
    Posts: Array<PostsType>
    addPost: (message: string) => void
    changeNewText: (newText: string) => void
    message: string
}

const MyPosts: React.FC<MyPostsType> = (props) => {


    let PostsElements = props.Posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
let newTextChengeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    props.changeNewText(e.currentTarget.value)
}

    let addPost = () => {
        props.addPost(props.message)
    }

    return (
        <div className={classes.content}>

            <div>
                <h3>My post</h3>
            </div>
            <div>
                <div>
                    <textarea value={props.message} onChange={newTextChengeHandler}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className="posts">
                {PostsElements}
            </div>
        </div>
    )
}

export default MyPosts;