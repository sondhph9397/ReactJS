import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function News() {
    const [cate_posts, setCategory] = useState([]);
    const API_CATEGORY = "http://localhost:1337/category-posts";
    // const detailPost = (id) => {
    //     console.log(id);
    // };
    useEffect(() => {
        fetch(API_CATEGORY)
            .then((response) => response.json())
            .then((data) => setCategory(data));
    }, []);
    return (
        <div className="bg-gray-300 py-8 align-center">
             <h1 className="text-5xl pb-6">
                           News
                        </h1>
            {cate_posts.map((cate, index) => ( 
                    <section key={index} className="inner">
                        <h1 className="text-2xl font-bold text-yellow-900 py-5 align-left">{cate.title}</h1>
                        <article className="grid grid-cols-4 gap-10 align-center"> 
                         {cate.posts.map((item) => (
                                    <div className="mx-auto">
                                        <div>
                                            <img className="h-64 w-64 object-cover" src={item.image ? `http://localhost:1337${item.image.map((item) => {return item.url;})}`: "null"} alt="Pic 01" />
                                        </div>
                                      <Link to={`/posts/${item.id}`}><h1 className="text-xl hover:text-red-700 pt-5 font-bold">{item.title}</h1></Link>  
                                    </div> 
                                    ))}
                        </article>
                    </section>
            ))}
        </div>
    );
}

export default News;
