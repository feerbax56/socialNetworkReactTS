import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Arenal_0.jpg'
                    alt='Earth'></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}


export default Profile;