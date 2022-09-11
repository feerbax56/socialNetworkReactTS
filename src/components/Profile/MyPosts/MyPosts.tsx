import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';


const MyPosts = () => {

    let Posts = [
        {id: 1, message: 'Hi', likesCount: 4},
        {id: 1, message: 'Hi, go back!', likesCount: 2},
        {id: 1, message: 'It is good', likesCount: 12},
    ]

    let PostsElements = Posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={classes.content}>

            <div>
                <h3>My post</h3>
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className="posts">
                {PostsElements}
            </div>
        </div>
    )
}

export default MyPosts;