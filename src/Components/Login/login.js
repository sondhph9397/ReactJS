import React, {useState} from "react";

function Login({Login,error}) {
  const [detail,setDetail] = useState({email:"", password:""});
  const submitHandler = e => {
    e.preventDefault();
    Login(detail);
  }
    return <div>
        <footer className="bg-gray-200 py-12">
        <div className="inner">
          <h3 className="text-5xl mb-6">Login</h3>
          {(error != "") ? (<div>{error}</div>) : ""}
          <form onSubmit={submitHandler} className="m-0">
            <div className="field half first">
              <label htmlFor="email">Email</label>
              <input name="email" id="email" type="email" placeholder="Email" onChange={e=>setDetail({...detail,email:e.target.value})} value={detail.email}/>
            </div>
            <div className="field half first">
              <label htmlFor="name">Password</label>
              <input name="password" id="password" type="password" placeholder="password" onChange={e=>setDetail({...detail,password:e.target.value})} value={detail.password}/>
            </div>
            <ul className="actions">
              <li>
                <button className="button" type="submit">Login</button>
              </li>
            </ul>
          </form>
        </div>
      </footer>
    </div>;
}

export default Login;
