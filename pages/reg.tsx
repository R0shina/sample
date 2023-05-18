import { useState } from "react";
function validation() {

  function handleClick(){
    
        console.log('Registration is done');
    
  }


  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = (event:Event) => {
    event.preventDefault();
    let inputError = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formInput.email && !formInput.password) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
        password: "Password should not be empty",
      
       
      });
      console.log();
      return
    }

    if (!formInput.email) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
      });

      console.log();
      return
    }

    if (formInput.confirmPassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be same",
      });
      console.log();
      return;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return
    }

    setFormError(inputError);
  };

  return (
    <div  className="min-h-full flex items-end justify-center mt-32 py-12 px-4 bg-slate-200 text-black" >
      <div className="form">
        <div className="form-title">
          <h4 className="title "> Validation Form</h4>
        </div>

        <div className="email">
          <form onSubmit={handleSubmit}>
            <p className="bg-gray-200 p-5 py-2 pl-24 md:py-4  w-full  border-gray-200   mb-2 mt-2 label">Email</p>
            <input
              value={formInput.email}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="email"
              type="text"
              className="input"
              placeholder="Enter Email"
              pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <p className="error-message">{formError.email}</p>

            <p className="label">Password</p>
            <input
              value={formInput.password} 
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <p className="error-message">{formError.password}</p>

            <p className="label">Confirm Password</p>
            <input
              value={formInput.confirmPassword}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="confirmPassword"
              type="password"
              className="input"
              placeholder="Confirm Password"
            />
            <p className="error-message">{formError.confirmPassword}</p>

            <input type="submit" onClick={handleClick} className="btn bg-gradient-to-b from-gray-700 to-gray-900 
            font-medium p-2 md:p-4  
            mt-2 text-white uppercase w-full " value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default validation;