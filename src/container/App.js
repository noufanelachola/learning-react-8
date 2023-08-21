import { useState } from 'react';

function App() {

  const [formData , setFormData] = useState({
    Email: "",
    Pass: "",
    PassConfirm: "",
    NewsLetter: false
  })
  
  function handleChange(event) {
    const {name , value , type , checked } = event.target;
    setFormData((prevFormData) => {
      return(
        {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value
        }
      );
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="Email" 
        placeholder="Email" 
        onChange={handleChange} 
        value={formData.Email}
      />

      
      <input 
        type="text" 
        name="Pass" 
        placeholder="Password" 
        onChange={handleChange} 
        value={formData.Pass}
      />
      <input 
        type="text" 
        name="PassConfirm" 
        placeholder="Confirm Password" 
        onChange={handleChange} 
        value={formData.PassConfirm}
      />
      <div className='newsLetter'>
        <input 
          type="checkbox" 
          name="NewsLetter" 
          id='NewsLetter'
          onChange={handleChange} 
          value={formData.NewsLetter}
        />
        <label htmlFor="NewsLetter">I want to join the NewsLetter</label>
      </div>
      <button>Sign Up</button>
    </form>  
  );
}

export default App;
