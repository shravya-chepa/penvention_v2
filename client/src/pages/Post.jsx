import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
// import Menu from "../components/Menu";

const Post = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single-post">
      <div className="content">
        <img src={post.img} alt="post-img" />
        <div className="user">
          {post.userImage && <img src={post.userImage} alt="user-img" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>

          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="edit" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="delete" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>

        <p>{post.description}</p>
      </div>
      {/* <div className="menu">
        <Menu />
      </div> */}
    </div>
  );
};
export default Post;