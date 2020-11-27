import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function News() {
    const [posts, setPosts] = useState([]);
    const API_PRODUCT = "http://localhost:1337/posts";

    useEffect(() => {
        fetch(API_PRODUCT)
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div>
            <section id="three" className="py-12 align-center bg-gray-400">
                <div className="inner">
                    <header>
                        <h1 className="text-5xl text-left pb-6">News</h1>
                    </header>
                    <div className="grid grid-cols-4 gap-20">
                        {posts.map((post, index) => (
                            <article key={index}>
                                <div className="image round w-64 h-64">
                                    <div className="img-custom">
                                        <img
                                            src={
                                                post.image
                                                    ? `http://localhost:1337${post.image.map(
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
                                <header>
                                    <h3>{post.title}</h3>
                                </header>
                                <p>{post.description}</p>
                                <footer className="grid grid-cols-2">
                                    {/* <button
                                        className="h-8"
                                        onClick={() => detailPro(post.id)}
                                    >
                                        <Link
                                            to={`/products/detail/${post.id}`}
                                        >
                                            lean more
                                        </Link>
                                    </button> */}
                                    {/* <button
                                        className="h-8"
                                        onClick={() => deleteProduct(post.id)}
                                    >
                                        Delete
                                    </button> */}
                                </footer>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default News;
