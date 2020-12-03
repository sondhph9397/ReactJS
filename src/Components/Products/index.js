import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

const Products = ({ pro, deleteProduct }) => {
    const [category, setCategory] = useState([]);
    const API_CATEGORY = "http://localhost:1337/categories";
    useEffect(() => {
        fetch(API_CATEGORY)
            .then((response) => response.json())
            .then((data) => setCategory(data));
    }, []);
    const detailPro = (id) => {
        console.log(id);
    };
    return (
        <div>
            <section id="three" className="py-12 align-center bg-gray-400">
                <div className="inner">
                    <header>
                        <h1 className="text-5xl text-left pb-6">
                            Product{" "}
                            {/* <span className="text-xl text-white text-right">
                                <Link to="/addproduct">Them</Link>
                            </span> */}
                        </h1>
                    </header>
                    <div className="grid grid-cols-4 gap-20">
                        {pro.map((pro, index) => (
                            <article key={index}>
                                <div className="image round w-64 h-64">
                                    <div className="img-custom">
                                        <img
                                            src={
                                                pro.image
                                                    ? `http://localhost:1337${pro.image.map(
                                                          (item) => {
                                                              return item.url;
                                                          }
                                                      )}`
                                                    : "null"
                                            }
                                            alt="Pic 01"
                                        />
                                    </div>
                                </div>
                                <header className="my-2 text-xl font-bold">
                                    <Link to={`/products/${pro.id}`}>
                                        <h3
                                            className="hover:text-red-800"
                                            onClick={() => detailPro(pro.id)}
                                        >
                                            {pro.name}
                                        </h3>
                                    </Link>
                                </header>
                                <p>{pro.price}$</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Products;
