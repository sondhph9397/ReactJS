import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

const Products = ({ pro, deleteProduct }) => {
    const detailPro = (id) => {
        console.log(id);
    }
    return (
        <div>
            <section id="three" className="py-12 align-center bg-gray-400">
                <div className="inner">
                    <header>
                        <h1 className="text-5xl text-left pb-6">
                            Product{" "}
                            <span className="text-xl text-white text-right">
                                <Link to="/addproduct">Them</Link>
                            </span>
                        </h1>
                    </header>
                    <div className="grid grid-cols-4 gap-20">
                        {pro.map((pro, index) => (
                            <article key={index}>
                                <div className="image round w-64 h-64">
                                    <div className="img-custom">
                                        <img src={pro.image ? `http://localhost:1337${pro.image.map((item) => {return item.url;})}`: "null"} alt="Pic 01" />
                                    </div>
                                </div>
                                <header>
                                    <h3>{pro.name}</h3>
                                </header>
                                <p>{pro.description}</p>
                                <footer className="grid grid-cols-2">
                                    <button className="h-8" onClick={() => detailPro(pro.id)}>
                                        <Link to={`/products/detail/${pro.id}`}>lean more</Link>
                                    </button>
                                    <button
                                        className="h-8"
                                        onClick={() => deleteProduct(pro.id)}
                                    >
                                        Delete
                                    </button>
                                </footer>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Products;
