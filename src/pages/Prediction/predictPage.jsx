import React from 'react'
import { Link } from 'react-router-dom';

const PredictPage = () => {
  return (
    <>
    <section className='cervix-section'>
      <div className='cervix-wrapper'>
      <div className='cervix-div'>
            <div className='cervix-head' >Cervix Tool</div>
        </div>

        <div className='para-div'>
            <p className='cervix-tool-p'>Welcome to Cervix Tool, an online platform for predicting your risk of cervical cancer. 
                Cervical cancer is a type of cancer that occurs in the cells of the cervix, the lower part of the uterus that connects to the vagina. 
                Early detection of cervical cancer can significantly improve treatment outcomes. 
                By providing some basic information, our predictive model can help assess your risk level.
                <span className="bold-text">Click on the predict button below to get started.</span> 
            </p>
            
        </div>
        <div className="button-container">
              <Link to="/predict" className="predict-link">
                <button className="predict-button">Predict the Risk of Cervical Cancer</button>
              </Link>
          </div>

        

      </div>
        
    </section>
        
    </>  
  )
}

export default PredictPage