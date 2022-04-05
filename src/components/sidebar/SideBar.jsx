import { useEffect, useState } from "react";
import { axiosInstance } from "../../config";
import "./sidebar.css";

export default function SideBar() {
  const [category, setCategory] = useState([]);
 

  useEffect(()=>{
    const getCats = async () =>{
      const res = await axiosInstance.get("/categories");
      setCategory(res.data);
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
      
      <div className="sidebarItem">
          <span className="sidebarTitle">About Us</span>
          <img className="sidebarImg" src="https://i.ibb.co/D4vgZJF/Blog.jpg" alt="" />
          {/* <img className="sidebarImg" src="https://static.toiimg.com/photo/87335820/87335820.jpg?v=3" alt="" /> */}
          <p>The blog description is independent of your blog content and is actually part of the meta-information. When you write a description, it will not appear anywhere in your blog but it always derives from the source content . This is the site where you can write whatever you want. </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {
            category.map((c)=>(
              <Link to={`/?categoty=${c.name}`} className="link" >
              <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))
          }
            
            
        </ul>
      </div> */}
      <div className="sidebarItem">
        <div className="sidebarTitle">Follow Us</div>
        <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}
