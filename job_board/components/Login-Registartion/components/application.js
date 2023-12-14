"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "../styles/Reg.scss"


function Application() {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useRouter();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === 'hire') {
        navigate.push('/registration/employer');
    } else if (selectedOption === 'beHired'){
        navigate.push('/registration/employee');
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
        <section className="regsec">
        <div className="RegChoose">
            <h2>Welcome To ...</h2>
            <form className="hireChoose" onSubmit={handleSubmit}>
            <label>
                <input
                type="radio"
                name="hireOption"
                value="hire"
                checked={selectedOption === 'hire'}
                onChange={handleOptionChange}
                />
                I Would Like To Hire
            </label>
            <label>
                <input
                type="radio"
                name="hireOption"
                value="beHired"
                checked={selectedOption === 'beHired'}
                onChange={handleOptionChange}
                />
                I Would Like To Be Hired
            </label>
            <button type="submit" className="startApp">
                Start Application
            </button>
            </form>
            <h4>
            Already Have an Account? <a href="/Login" onClick={() => navigate('/Login')}>LogIn</a>
            </h4>
        </div>
        {/* {showForm && renderForm()} */}
        </section>
  );
}

export default Application;