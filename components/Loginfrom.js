import React, {useState}from 'react' ;

function Loginform({Login,error}) {
    const[details,setDetails] = useState({name: "",email:"",password: ""});

    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }
  return (
    <form onSubmit={submitHandler}>
    <div className='form-inner'>
        <h2>Login</h2>
        {(error!= "") ? ( <div classNmae="error">{error}</div>) : ""}
        <div className="form-group">
            <label htmlFor="name">Name:</label
            <input type="text" name="name" id="name" onChange={e => setDetails({...details, name:e.target.value})} value={details.name}/>
        </div>
        <div className="form-group">
            <label htmlFOR="email">Email: </label>
            <input type="email" name="email" id="email" onchange={e => setDetails({...details, email:e.target.value})} value={details.email} />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onchange={e => setDetails({...details,password:e. target.value})}  value={details.password}/>
        </div>
      
    </div>
    </form>
  )
}

export default Loginfrom;
