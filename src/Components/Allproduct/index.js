import React, {useState,useEffect} from 'react';
import Pagination from '../Pagination';
import { BrowserRouter as Router, Link } from "react-router-dom";

function All() {
    const [list, setList] = useState([]);
    const [totalProduct, setTotalProduct] = useState(0);

    const [filter, setFilter] = useState({
        start: 0,
        limit: 2,
        page: 1,
    })

    useEffect(() => {
        fetch('http://localhost:1337/products/count')
            .then(res => res.json())
            .then(data => setTotalProduct(data))
    }, [])

    useEffect(() => {
        const URL_PRODUCT = `http://localhost:1337/products?_start=${filter.start}&_limit=${filter.limit}`;

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
            <article className="grid grid-cols-4 gap-10 align-center"> 
                         {list.map((item) => (
                                    <div className="mx-auto">
                                        <div>
                                            <img className="h-64 w-64 object-cover" src={item.image ? `http://localhost:1337${item.image.map((item) => {return item.url;})}`: "null"} alt="Pic 01" />
                                        </div>
                                      <Link to={``}><h1 onClick={() => detailPro(item.id)} className="text-xl hover:text-red-700 pt-5 font-bold">{item.name}</h1></Link>
                                    </div> 
                                    ))}          
            </article>
            <Pagination page={filter.page} limit={filter.limit} onPageChange={handlePageChange} totalProduct={totalProduct} />
        </div>
    )
}

export default All
