import SideBar from '../../components/sidebar/SideBar';
import SinglePost from '../../components/singlePost/SinglePost';
import './singlePage.css';

export default function SinglePage() {
  return (
    <div className='singlePage'>
        <SinglePost />
        <SideBar />
    </div>
  )
}
