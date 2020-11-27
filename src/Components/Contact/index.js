import React from "react";
import Banner from "../Banner";
import Footer from "../Footer";
import Header from "../Header";

function Contact() {
  return (
    <div>
      <footer className="bg-gray-200 py-12">
        <div className="inner">
          <h3 className="text-5xl mb-6">ConTact</h3>
          <form action="#" method="post" className="m-0">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input name="name" id="name" type="text" placeholder="Name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input name="email" id="email" type="email" placeholder="Email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows={6}
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <ul className="actions">
              <li>
                <input
                  defaultValue="Send Message"
                  className="button"
                  type="submit"
                />
              </li>
            </ul>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
