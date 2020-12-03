import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    let { id } = useParams();
    const API_DETAIL_PRODUCT = `http://localhost:1337/products/${id}`;
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch(API_DETAIL_PRODUCT)
            .then((response) => response.json())
            .then((data) => {
                setDetail(data);
            })
    }, []);

    return (
        <div id="main">
        <div class="bg-white shadow overflow-hidden py-10">
            <div class="w-4/6 mx-auto grid grid-cols-2 gap-5">
                <div class="">
                    
                    <div className="mx-auto">
                    <img className="w-96 h-64 object-cover" src={detail.image ? `http://localhost:1337${detail.image.map((item) => {return item.url;})}`: "null"}/>
                    </div>
                </div>
                <div class="border-t border-gray-200">
                    <h3 class="text-3xl leading-6 font-medium text-blue-700 ml-14">
                        {detail.name}
                    </h3>
                    <dl>
                        <div class="bg-gray-50 grid grid-cols-1 gap-4 my-4">
                            <dt class="text-sm font-medium text-text-gray-900">
                                {detail.description}
                            </dt>
                        </div>
                        <p className="text-red-700 text-3xl">{detail.price}$</p>
                        <button className="button mt-8">ADD TO CART</button>
                    </dl>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Detail;
