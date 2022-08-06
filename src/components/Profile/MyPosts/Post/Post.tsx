import classes from './Post.module.css'

type PostPropsType = {
    message: string;
    likesCount: number
}


const Post = (props: PostPropsType) => {


    return (

        <div className={classes.item}>
            <img
                src='data:image/jpeg;base64,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'
                alt='Nan))'></img>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;