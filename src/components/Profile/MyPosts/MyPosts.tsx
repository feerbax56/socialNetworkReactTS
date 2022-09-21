import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';
import {PostsType} from '../../../redux/state';

type MyPostsType = {
    Posts: Array<PostsType>
}

const MyPosts: React.FC<MyPostsType> = (props) => {


    let PostsElements = props.Posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={classes.content}>

            <div>
                <h3>My post</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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