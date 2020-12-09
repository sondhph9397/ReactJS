import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function CategoryNew() {
    const [category, setCategory] = useState([]);
    const API_CATEGORY = "http://localhost:1337/category-posts";
    useEffect(() => {
        fetch(API_CATEGORY)
            .then((response) => response.json())
            .then((data) => setCategory(data));
    }, []);
    const detail = (id) => {
        console.log(id);
    }
    return (
        <div>
            <section id="three" className="py-12 align-center bg-gray-400">
                <div className="inner">
                <header>
                      <h1 className="text-5xl pb-6">
                            News
                        </h1>
                    </header>
                    <div className="grid grid-cols-4 gap-20">
                        {category.map((cate, index) => (
                            <article key={index}>
                                <div className="image round w-64 h-64">
                                    <div className="img-custom">
                                        <img src={cate.image ? `http://localhost:1337${cate.image.map((item) => {return item.url;})}`: "null"}
                                            alt="Pic 01"
                                        />
                                    </div>
                                </div>
                                <header className="my-2 text-xl font-bold">
                                    <Link to={`/${cate.id}`}>
                                        <h3
                                            className="hover:text-red-800" onClick={() => detail(cate.id)}>{cate.title}
                                        </h3>
                                    </Link>
                                </header>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CategoryNew;
