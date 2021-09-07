import React from "react";
import { useForm } from "react-hook-form";

const AddAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const adminData = {
      name: data.name,
      email: data.email,
    };

    fetch("https://localhost:3000/addAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminData),
    }).then((res) => console.log(res));
    reset({});
  };
  return (
    <div className="">
      <div className=" add_admin">
        <h4 className="m-2 text-primary">Make Admin</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <br />
          <br />
          <input
            placeholder="Name"
            className="form-control input"
            type="text"
            {...register("name", { required: true })}
          />{" "}
          <br />
          <br />
          <input
            type="email"
            className="form-control input"
            placeholder="email"
            {...register("email", { required: true })}
          />
          <br></br>
          <input
            type="submit"
            value=" make admin"
            className="btn btn-success"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;
