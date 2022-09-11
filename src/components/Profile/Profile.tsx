import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {
    return (
        <div>
            <ProfileInfo
                src={'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Arenal_0.jpg'}/>
            <MyPosts/>
        </div>
    )
}


export default Profile;