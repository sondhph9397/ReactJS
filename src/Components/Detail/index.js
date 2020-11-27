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
            .catch((err) => {
                console.log("eerrr");
            });
    }, []);

    return (
        <div className="detail-product">
            <div className="container mx-auto py-20">
                <div className="grid grid-cols-2">
                    <div className="grid grid-cols-2">
                        <img src={detail.image ? `http://localhost:1337${detail.image.map((item) => {return item.url;})}`: "null"}/> 
                        <br/>
                        <div className="">
                            <p className="">{detail.name}</p>
                            <p className="">{detail.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
