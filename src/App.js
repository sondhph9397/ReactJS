import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import AddProduct from "./Components/AddProduct";
import swal from "sweetalert";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./Components/Detail";
import DetailPost from "./Components/DetailPost";
import Category from "./Components/Categories";
import CateDetail from "./Components/CategoriesDetail";
import Login from "./Components/Login/login";
import CateDetailNew from "./Components/CateDetailNew";
import All from "./Components/Allproduct";

function App() {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const API_PRODUCT = "http://localhost:1337/products";

    useEffect(() => {
        fetch(API_PRODUCT)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    const onDeleteProduct = (id) => {
        swal({
            title: "Are you sure?",
            text:
                "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                fetch(`${API_PRODUCT}/${id}`, {
                    method: "DELETE", // or 'PUT'
                })
                    .then((response) => response.json())
                    .then((data) =>
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        })
                    );

                const newProducts = products.filter((pro) => pro.id !== id);
                setProducts(newProducts);
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    };

    const onAddPost = (post) => {
        fetch(API_PRODUCT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        })
            .then((response) => response.json())
            .then(() => swal("Bạn đã thêm thành công"));
        setProducts([...products, product]);
    };
    return (
        <Router>
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/all">
                    <All/>
                </Route>
                <>
                    <Header />
                    <Banner />
                    <Switch>
                        <Route exact path="/">
                            <Home
                                pro={products}
                                deleteProduct={onDeleteProduct}
                            />
                        </Route>
                        <Route path="/About">
                            <About />
                        </Route>
                        <Route path="/Contact">
                            <Contact />
                        </Route>
                        <Route path="/AddProduct">
                            <AddProduct add={onAddPost} />
                        </Route>
                        <Route exact path="/products">
                            <Products
                                pro={products}
                                deleteProduct={onDeleteProduct}
                            />
                        </Route>
                        <Route exact path="/:title/:name/:id">
                            <Detail />
                        </Route>
                        <Route path="/News">
                            <News />
                        </Route>
                        <Route exact path="/posts/:id">
                            <DetailPost />
                        </Route>
                        <Route exact path="/category">
                            <Category />
                        </Route>
                        <Route exact path="/:title/:id">
                            <CateDetail />
                        </Route>
                       {/* <Route path="/:detail/:id">
                           <CateDetailNew/>
                       </Route> */}
                        {/* <Route exact path="/:title/:name/:id">
                            <DetailPost />
                        </Route> */}
                    </Switch>
                    <Footer />
                </>
            </Switch>
        </Router>
    );
}

export default App;
