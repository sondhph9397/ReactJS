import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
function CateDetailNew() {
    let { id } = useParams();
    const [category, setCategory] = useState([]);
    const API_CATEGORY = `http://localhost:1337/category-posts/${id}`;
    useEffect(() => {
        fetch(API_CATEGORY)
            .then((response) => response.json())
            .then((data) => setCategory(data));
    }, []);
    return (
        <div className="bg-gray-300 py-8">
            <section className="inner">
                <h1 className="text-3xl font-bold pb-5">{category.title}</h1>
                <article className="grid grid-cols-4 gap-10 align-center"> 
                {category.posts && category.posts.length > 0
                    ? category.posts.map((item) => (
                          <div className="mx-auto">
                              <div>
                                  <img className="h-64 w-64 object-cover"src={item.image ? `http://localhost:1337${item.image.map((item) => {return item.url;})}`: "null"} alt="Pic 01"/>
                              </div>
                              <Link to={`/detail/${category.title}/${item.title}/${item.id}`}>
                                  <h1 className="text-xl hover:text-red-700 pt-5 font-bold">
                                      {item.title}
                                  </h1>
                              </Link>
                          </div>
                      ))
                    : null}
                    </article>
            </section>
        </div>
    );
}

export default CateDetailNew;
