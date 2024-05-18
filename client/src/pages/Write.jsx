import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

const Write = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="title" />
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
          <input type="file" name="" id="file" style={{ display: "none" }} />
          <label className="file" htmlFor="file">
            Upload image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
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
        </div>
      </div>
    </div>
  );
};

export default Write;
