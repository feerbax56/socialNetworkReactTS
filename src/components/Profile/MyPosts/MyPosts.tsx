import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div className={classes.content}>

            <div>
                My post
            </div>
            <div>
                New post
            </div>
            <div className='posts'>
                <Post message={'Hi, go back!'} likesCount={4}/>
                <Post message={'It is good'} likesCount={3} />
            </div>
        </div>
    )
}

export default MyPosts;