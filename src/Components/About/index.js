import React, { useEffect, useState } from "react";

function About() {
    const [about, setAbout] = useState([]);
    const API = "http://localhost:1337/abouts";
    useEffect(() => {
        fetch(API)
            .then((response) => response.json())
            .then((data) => setAbout(data));
    }, []);
    return (
        <section id="one" className="wrapper style2">
            <div className="inner">
                <div>  
                  {about.map((item, index) => (
                    <div className="box">
                        <div className="image fit">
                        <img src={item.image ? `http://localhost:1337${item.image.map((item) => {return item.url;})}`: "null"}/>
                        </div>
                      
                            <div className="content">
                                <header className="align-center">
                                    <h2>{item.title}</h2>
                                    <p>
                                       {item.slogan}
                                    </p>
                                </header>
                                <hr />
                                <p>{item.description}</p>
                            </div>
                     </div>
                     ))}
                </div>
            </div>
        </section>
    );
}

export default About;
