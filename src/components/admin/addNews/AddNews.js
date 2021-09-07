import React, { useState } from "react";

const AddNews = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
    console.log(file);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", info.category);
    formData.append("headline", info.headline);
    formData.append("description", info.description);

    fetch("http://localhost:3000/addNews", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    e.preventDefault();
    e.target.reset();
  };

  return (
    <section className="container-fluid row">
      <div className="col-md-9 " style={{ backgroundColor: "#F4FDFB" }}>
        <h5 className="text-brand">Add a news</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Category</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="category"
              placeholder="Category"
            />{" "}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Headline</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="headline"
              placeholder="Headline"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            <textarea
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="description"
              placeholder="Description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Upload a image</label>
            <input
              onMouseLeave={handleFileChange}
              type="file"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Picture"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddNews;
