import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React, {ChangeEvent} from 'react';
import {ActionsTypes, PostsType} from '../../../redux/store';

type MyPostsType = {
    Posts: Array<PostsType>
    message: string
    dispatch: (action: ActionsTypes) => void
    addPost: () => void
    newTextChangeHandler: (text: string) => void
}


const MyPosts: React.FC<MyPostsType> = (props) => {

    let PostsElements = props.Posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let onNewTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newTextChangeHandler(e.currentTarget.value)
    }

    let onAddPost = () => {
        props.addPost()
    }

    return (
        <div className={classes.content}>

            <div>
                <h3>My post</h3>
            </div>
            <div>
                <div>
                    <textarea
                        value={props.message}
                        onChange={onNewTextChangeHandler}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

            <div className="posts">
                {PostsElements}
            </div>
        </div>
    )
}

export default MyPosts;