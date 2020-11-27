import React, { useState } from "react";
import Banner from "../Banner";
import Footer from "../Footer";
import Header from "../Header";

const AddProduct = ({ add }) => {
    const [post, setPost] = useState({});
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setPost({
            ...post,
            [name]: value,
        });
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        add(post);
    };
    const refreshPage = () => {
        window.location.reload(false);
    };
    return (
        <div>
            <div className="mt-10 w-1/2 mx-auto text-white">
                <form action="" onSubmit={onHandleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        onChange={onHandleChange}
                        name="name"
                    />
                    <br />
                    <input type="file" name="image" onChange={onHandleChange} />
                    <br />
                    <textarea
                        rows="5"
                        onChange={onHandleChange}
                        name="description"
                    ></textarea>
                    <button onClick={refreshPage} className="button my-2">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
