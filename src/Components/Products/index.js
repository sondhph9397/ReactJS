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
                        <Link to="/category"><h1 className="text-5xl pb-6">
                            Product
                        </h1></Link>
                        
                    </header>
                    <div>
                    {category.map((cate, index) => ( 
                    <section key={index} className="inner">
                        <h1 className="text-2xl font-bold text-yellow-900 py-5 align-left">{cate.title}</h1>
                        <article className="grid grid-cols-4 gap-10 align-center"> 
                         {cate.products.map((item) => (
                                    <div className="mx-auto">
                                        <div>
                                            <img className="h-64 w-64 object-cover" src={item.image ? `http://localhost:1337${item.image.map((item) => {return item.url;})}`: "null"} alt="Pic 01" />
                                        </div>
                                      <Link to={`/${cate.title}/${item.name}/${item.id}`}><h1 className="text-xl hover:text-red-700 pt-5 font-bold">{item.name}</h1></Link>  
                                    </div> 
                                    
                                    ))}
                                    
                        </article>
                    </section>
            ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Products;
