import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
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
                <Post message={'Hi, go back!'} likesCount={4}/>
                <Post message={'It is good'} likesCount={3}/>
            </div>
        </div>
    )
}

export default MyPosts;