import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import AddProduct from "./Components/AddProduct";
import swal from "sweetalert";


function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const API_PRODUCT = "http://localhost:3000/product";
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
        const API_PRODUCT = `http://localhost:3000/product/${id}`;
        fetch(API_PRODUCT, {
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

  return (
    <div>
      <Header />
      <Banner />
      <Products pro={products} deleteProduct={onDeleteProduct} />
      <AddProduct />
      <Footer />
    </div>
  );
}

export default App;
