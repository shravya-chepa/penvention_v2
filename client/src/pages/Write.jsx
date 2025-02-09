import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import moment from "moment";

const Write = () => {
  const state = useLocation().state
  const [value, setValue] = useState(state?.post.description || "");
  const [title, setTitle] = useState( state?.post.title || "");
  const [file, setFile] = useState(null);

  const navigate = useNavigate()

  // console.log("state here: ", state)
  // console.log("title: ", state.post.title)

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state? await axios.put(`/posts/${state.post.id}`, {
        title, description: value, img: file ? imgUrl: "",

      }) :
      await axios.post(`/posts/`, {
        title, description: value, img: file ? imgUrl: "", date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")

      })
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="editor"
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            type="file"
            name=""
            id="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handlePublish}>Publish</button>
          </div>
        </div>
        {/* <div className="item">
          <h1>Category</h1>
          <div className="category">
            <input type="radio" name="cat" value="literature" id="literature" />
            <label htmlFor="art">Literature</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="art">Science</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="technology" id="technology" />
            <label htmlFor="art">Tech</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="cinema" id="cinema" />
            <label htmlFor="art">Cinema</label>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Write;
