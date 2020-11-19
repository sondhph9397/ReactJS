import React from "react";

const Products = ({ pro, deleteProduct }) => {
  return (
    <div>
      <section id="three" className="wrapper align-center">
        <div className="inner">
          <div className="grid grid-cols-4 gap-20">
            {pro.map((pro, index) => (
              <article key={index}>
                <div className="image round">
                  <img src={pro.image} alt="Pic 01" />
                </div>
                <header>
                  <h3>{pro.name}</h3>
                </header>
                <p>{pro.price}</p>
                <footer className="grid grid-cols-2">
                  <button className="button text-center">Lean more</button>
                  <button className="button" onClick={() => deleteProduct(pro.id)}>DELETE</button>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Products;
