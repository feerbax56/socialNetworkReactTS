import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {

    let PostData = [
        {id: 1, message: 'Hi', likesCount: 4},
        {id: 1, message: 'Hi, go back!', likesCount: 2},
        {id: 1, message: 'It is good', likesCount: 5},
    ]

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
                <Post message={PostData[0].message} likesCount={PostData[0].likesCount}/>
                <Post message={PostData[1].message} likesCount={PostData[1].likesCount}/>
                <Post message={PostData[2].message} likesCount={PostData[2].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;