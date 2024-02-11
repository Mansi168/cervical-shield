import React from 'react'
import { useState } from 'react';

const Predict = () => {
    const [formData, setFormData] = useState({
        age: '',
        sexualActivity: '',
        pregnancies: '',
        hpvVaccination: '',
        firstSexualIntercourse: '',
        smokesYears:'',
        smokesPacksYears:'',
        hormonalContraceptivesYears:'',
        iudYears:'',
        stds: '',
        stdNumber: '',
        hpv:'',
        condylomatosis: '',
        numberofdiagnosis:'',
        dxcancer:'',
        hepotitisB: '',
        dxcin: '',
        cervicalcondylomatosis:'',
        vaginalcondylomatosis:'',
        vpc:'',
        syphilis:'',
        dxhpv:'',
        pelvicInflammatoryDis:'',
        genitalherpes:'',
        molluscumcondylomatosis:'',
        aids:'',
        hiv:'',

        // Add more fields as needed
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your prediction logic here using the formData
        console.log(formData);
      };
    
      return (
        <>
        <section className='cervix-section'>
          <div className='cervix-wrapper'>
            <div className='cervix-div'>
              <div className='cervix-head'>Predict Cervical Cancer Risk</div>
            </div>

    
            <div className="form-container">
              <form onSubmit={handleSubmit} className="predict-form">
                
                
                    <label>
                    Age:
                    <input type="text" name="age" value={formData.age} onChange={handleChange} />
                    {/* <span className="info-tooltip">Age must be a positive integer</span> */}
                    </label>
                    <label>
                    Sexual Activity (years):
                    <input type="text" name="sexualActivity" value={formData.sexualActivity} onChange={handleChange} />
                    </label>
                    <label>
                    Pregnancies:
                    <input type="text" name="pregnancies" value={formData.pregnancies} onChange={handleChange} />
                    </label>
                    <label>
                    HPV Vaccination (yes/no):
                    <input type="text" name="hpvVaccination" value={formData.hpvVaccination} onChange={handleChange} />
                    </label>
                    <label>
                    Age at First Sexual Intercourse:
                    <input type="text" name="firstSexualIntercourse" value={formData.firstSexualIntercourse} onChange={handleChange} />
                    </label>
                    <label>
                    Years of Smoking:
                    <input type="text" name="smokesYears" value={formData.smokesYears} onChange={handleChange} />
                    </label>
                    <label>
                    Packs of Cigarettes per Year:
                    <input type="text" name="smokesPacksYears" value={formData.smokesPacksYears} onChange={handleChange} />
                    </label>
                    <label>
                    Years of Hormonal Contraceptives Use:
                    <input type="text" name="hormonalContraceptivesYears" value={formData.hormonalContraceptivesYears} onChange={handleChange} />
                    </label>
                    <label>
                    Years of Intrauterine Device (IUD) Use:
                    <input type="text" name="iudYears" value={formData.iudYears} onChange={handleChange} />
                    </label>

                    <label>
                    STDs (yes/no) :
                    <input type="text" name="stds" value={formData.stds} onChange={handleChange} />
                    </label>

                    <label>
                    STDs (Number) : 
                    <input type="text" name="stdNumber" value={formData.stdNumber} onChange={handleChange} />
                    </label>

                    <label>
                    HPV (yes/no) :
                    <input type="text" name="hpv" value={formData.hpv} onChange={handleChange} />
                    </label>

                    <label>
                    Condylomatosis (yes/no) :
                    <input type="text" name="condylomatosis" value={formData.condylomatosis} onChange={handleChange} />
                    </label>

                    <label>
                    Number of Diagnosis :
                    <input type="text" name="numberofdiagnosis" value={formData.numberofdiagnosis} onChange={handleChange} />
                    </label>

                    <label>
                    Dx:Cancer (yes/no) :
                    <input type="text" name="dxcancer" value={formData.dxcancer} onChange={handleChange} />
                    </label>

                    <label>
                    Hepatitis B (yes/no) :
                    <input type="text" name="hepotitisB" value={formData.hepotitisB} onChange={handleChange} />
                    </label>

                    <label>
                    Dx:CIN (yes/no) :
                    <input type="text" name="dxcin" value={formData.dxcin} onChange={handleChange} />
                    </label>

                    <label>
                    Syphilis (yes/no) :
                    <input type="text" name="syphilis" value={formData.syphilis} onChange={handleChange} />
                    </label>

                    <label>
                    Dx:HPV (yes/no) :
                    <input type="text" name="dxhpv" value={formData.dxhpv} onChange={handleChange} />
                    </label>

                    <label>
                    Pelvic Inflammatary Diseases (yes/no) :
                    <input type="text" name="pelvicInflammatoryDis" value={formData.pelvicInflammatoryDis} onChange={handleChange} />
                    </label>

                    <label>
                    Genital Herpes (yes/no) :
                    <input type="text" name="genitalherpes" value={formData.genitalherpes} onChange={handleChange} />
                    </label>

                    <label>
                    Molluscum condylomatosis (yes/no) :
                    <input type="text" name="molluscumcondylomatosis" value={formData.molluscumcondylomatosis} onChange={handleChange} />
                    </label>

                    <label>
                    AIDS (yes/no)  :
                    <input type="text" name="aids" value={formData.aids} onChange={handleChange} />
                    </label>

                    <label>
                    HIV (yes/no) :
                    <input type="text" name="hiv" value={formData.hiv} onChange={handleChange} />
                    </label>

               
                <button type="submit" className="predict-button">Predict Risk</button>
                
              </form>
            </div>
        </div>
        </section>
        </>
      );
}

export default Predict