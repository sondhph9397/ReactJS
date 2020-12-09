import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Pagination from "../Pagination";

function Category() {
    const [list, setList] = useState([]);
    const [totalProduct, setTotalProduct] = useState(0);

    const [filter, setFilter] = useState({
        start: 0,
        limit: 4,
        page: 1,
    })

    useEffect(() => {
        fetch('http://localhost:1337/categories/count')
            .then(res => res.json())
            .then(data => setTotalProduct(data))
    }, [])

    useEffect(() => {
        const URL_PRODUCT = `http://localhost:1337/categories?_start=${filter.start}&_limit=${filter.limit}`;

        function fetchData() {
            fetch(URL_PRODUCT)
                .then(response => response.json())
                .then(data => setList(data))
        }

        fetchData();
        window.scrollTo(0, 0)
    }, [filter]);



    function handlePageChange(newStart) {
        let customStart;
        if (newStart < filter.start) {
            customStart = filter.start - filter.limit
        } else if (newStart > filter.start) {
            customStart = filter.start + filter.limit
        }

        setFilter({
            ...filter,
            start: customStart,
            page: newStart
        })
    }

    const detailPro = (id) => {
        console.log(id);
    };

    return (
        <div>
            <section id="three" className="py-12 align-center bg-gray-400">
                <div className="inner">
                <header>
                      <h1 className="text-5xl pb-6">
                            Product
                        </h1>
                    </header>
                    <div className="grid grid-cols-4 gap-20">
                        {list.map((cate, index) => (
                            <article key={index}>
                                <div className="image round w-64 h-64">
                                    <div className="img-custom">
                                        <img src={cate.image ? `http://localhost:1337${cate.image.map((item) => {return item.url;})}`: "null"}
                                            alt="Pic 01"
                                        />
                                    </div>
                                </div>
                                <header className="my-2 text-xl font-bold">
                                    <Link to={`/${cate.title}/${cate.id}`}>
                                        <h3
                                            className="hover:text-red-800" onClick={() => detailPro(cate.id)}>{cate.title}
                                        </h3>
                                    </Link>
                                </header>
                            </article>
                        ))}
                        
                    </div>

                </div>
                <Pagination page={filter.page} limit={filter.limit} onPageChange={handlePageChange} totalProduct={totalProduct} />
            </section>
        </div>
    );
}

export default Category;
