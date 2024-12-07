import React, { useState } from 'react'
import './BeDonor.css';
import Header from './Header';
import dog3 from '../assets/images/mainpage/dog3.png'
import Footer from './Footer';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const BeDonor = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        address: '',
        contactNo: '',
        email: '',
        dob: '',
        livingLocation: [],
        landlordPermission: '',
        otherPets: '',
        petDetails: Array(5).fill({ species: '', breed: '', age: '', gender: '' }),
        signature: '',
        date: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === 'livingLocation') {
            setFormData(prevState => ({
                ...prevState,
                livingLocation: checked
                    ? [...prevState.livingLocation, value]
                    : prevState.livingLocation.filter(item => item !== value)
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: checked ? value : ''
            }));
        }
    };

    const handlePetDetailsChange = (index, field, value) => {
        setFormData(prevState => ({
            ...prevState,
            petDetails: prevState.petDetails.map((pet, i) => 
                i === index ? { ...pet, [field]: value } : pet
            )
        }));
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.contactNo.trim()) newErrors.contactNo = 'Contact number is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.dob.trim()) newErrors.dob = 'Date of birth is required';
        if (formData.livingLocation.length === 0) newErrors.livingLocation = 'Please select a living location';
        if (!formData.landlordPermission) newErrors.landlordPermission = 'Please indicate if you have landlord permission';
        if (!formData.otherPets) newErrors.otherPets = 'Please indicate if you have other pets';
        if (!formData.signature.trim()) newErrors.signature = 'Signature is required';
        if (!formData.date.trim()) newErrors.date = 'Date is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
          try {
            const docRef = await addDoc(collection(db, "adoptionApplications"), formData);
            console.log("Document written with ID: ", docRef.id);
            alert("Form submitted successfully!");
            // Reset form after submission if needed
            // setFormData({ ... }); // Reset to initial state
          } catch (error) {
            console.error("Error adding document: ", error);
            alert("An error occurred while submitting the form. Please try again.");
          }
        } else {
          console.log('Form has errors');
        }
      };

    return (
        <>
            <div className='bedonor'>
                <Header/>
                <section className="pet-adoption-hero">
                    <div className="pet-adoption-hero-image">
                        <img src={dog3} alt="Adopt me dog" />
                    </div>
                    <div className="pet-adoption-hero-text">
                        <h1>Find Your New Best Friend - Start Your</h1>
                        <h2>Adoption Journey Today!</h2>
                    </div>
                </section>
                <form className="pet-adoption-form" onSubmit={handleSubmit}>
                    <h3 className="pet-adoption-form-title">Please Complete this form</h3>
                    <p className="pet-adoption-form-subtitle">to fulfill to apply to adopt a puppy or dog from the pet house</p>

                    <div className="pet-adoption-form-section">
                        <h4>Application Details</h4>
                        <div className="pet-adoption-form-row">
                            <div>
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    placeholder="First Name" 
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                                {errors.firstName && <span className="error">{errors.firstName}</span>}
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    name="middleName" 
                                    placeholder="Middle Name" 
                                    value={formData.middleName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    placeholder="Last Name" 
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                                {errors.lastName && <span className="error">{errors.lastName}</span>}
                            </div>
                        </div>
                        <div>
                            <input 
                                type="text" 
                                name="address" 
                                placeholder="Address" 
                                className="pet-adoption-form-full-width"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                            {errors.address && <span className="error">{errors.address}</span>}
                        </div>
                        <div className="pet-adoption-form-row">
                            <div>
                                <select 
                                    name="contactNo"
                                    value={formData.contactNo}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Contact No.</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="home">Home</option>
                                    <option value="work">Work</option>
                                </select>
                                {errors.contactNo && <span className="error">{errors.contactNo}</span>}
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email ID"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>
                            <div>
                                <input 
                                    type="date" 
                                    name="dob" 
                                    placeholder="DOB"
                                    value={formData.dob}
                                    onChange={handleInputChange}
                                />
                                {errors.dob && <span className="error">{errors.dob}</span>}
                            </div>
                        </div>
                    </div>

                    <div className="pet-adoption-form-section">
                        <h4>Property Details</h4>
                        <div className="pet-adoption-form-checkbox-group">
                            <p>What best decide your current living location?</p>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="livingLocation" 
                                    value="house"
                                    checked={formData.livingLocation.includes('house')}
                                    onChange={handleCheckboxChange}
                                /> House
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="livingLocation" 
                                    value="flat"
                                    checked={formData.livingLocation.includes('flat')}
                                    onChange={handleCheckboxChange}
                                /> Flat/Apartment
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="livingLocation" 
                                    value="farm"
                                    checked={formData.livingLocation.includes('farm')}
                                    onChange={handleCheckboxChange}
                                /> Farm/Rural Property
                            </label>
                            {errors.livingLocation && <span className="error">{errors.livingLocation}</span>}
                        </div>
                        <div className="pet-adoption-form-checkbox-group">
                            <p>If renting, do you have permission of your landlord to have a dog on the premises</p>
                            <label>
                                <input 
                                    type="radio" 
                                    name="landlordPermission" 
                                    value="yes"
                                    checked={formData.landlordPermission === 'yes'}
                                    onChange={handleCheckboxChange}
                                /> Yes
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="landlordPermission" 
                                    value="no"
                                    checked={formData.landlordPermission === 'no'}
                                    onChange={handleCheckboxChange}
                                /> No
                            </label>
                            {errors.landlordPermission && <span className="error">{errors.landlordPermission}</span>}
                        </div>
                    </div>

                    <div className="pet-adoption-form-section">
                        <h4>Other pets</h4>
                        <div className="pet-adoption-form-checkbox-group">
                            <p>Do you have any other pets?</p>
                            <label>
                                <input 
                                    type="radio" 
                                    name="otherPets" 
                                    value="yes"
                                    checked={formData.otherPets === 'yes'}
                                    onChange={handleCheckboxChange}
                                /> Yes
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="otherPets" 
                                    value="no"
                                    checked={formData.otherPets === 'no'}
                                    onChange={handleCheckboxChange}
                                /> No
                            </label>
                            {errors.otherPets && <span className="error">{errors.otherPets}</span>}
                        </div>
                        {formData.otherPets === 'yes' && (
                            <table className="pet-adoption-form-table">
                                <thead>
                                    <tr>
                                        <th>SPECIES</th>
                                        <th>BREED</th>
                                        <th>AGE</th>
                                        <th>MALE/FEMALE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {formData.petDetails.map((pet, index) => (
                                        <tr key={index}>
                                            <td>
                                                <input 
                                                    type="text"
                                                    value={pet.species}
                                                    onChange={(e) => handlePetDetailsChange(index, 'species', e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <input 
                                                    type="text"
                                                    value={pet.breed}
                                                    onChange={(e) => handlePetDetailsChange(index, 'breed', e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <input 
                                                    type="text"
                                                    value={pet.age}
                                                    onChange={(e) => handlePetDetailsChange(index, 'age', e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <input 
                                                    type="text"
                                                    value={pet.gender}
                                                    onChange={(e) => handlePetDetailsChange(index, 'gender', e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    <div className="pet-adoption-form-section">
                        <h4>Application Declaration's</h4>
                        <p>Please read the following information and sign at the end of this document to indicate you have understood and accept the terms and condition of adoption from Pet house</p>
                        <ol>
                            <li>Adopter must be at least 18 years of age (or age specified).</li>
                            <li>Valid government-issued photo ID required.</li>
                            <li>Adopter must complete and submit a full application.</li>
                            <li>Adopter agrees to a potential home check as part of the application process.</li>
                        </ol>
                        <div className="pet-adoption-form-signature">
                            <div>
                                <label>Signed:</label>
                                <input 
                                    type="text"
                                    name="signature"
                                    value={formData.signature}
                                    onChange={handleInputChange}
                                />
                                {errors.signature && <span className="error">{errors.signature}</span>}
                            </div>
                            <div>
                                <label>Date:</label>
                                <input 
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                />
                                {errors.date && <span className="error">{errors.date}</span>}
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="pet-adoption-form-submit">Submit</button>
                </form>
                <div className='asfooter'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default BeDonor
