import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React, {ChangeEvent} from 'react';
import {ActionsTypes, PostsType} from '../../../redux/store';
import {addPostAC, changeNewTextAC} from '../../../redux/profileReducer';

type MyPostsType = {
    Posts: Array<PostsType>
    message: string
    dispatch: (action: ActionsTypes) => void
}


const MyPosts: React.FC<MyPostsType> = (props) => {

    let PostsElements = props.Posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextAC(e.currentTarget.value))
    }

    let addPost = () => {
        props.dispatch(addPostAC(props.message))
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
                        onChange={newTextChangeHandler}
                    />
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