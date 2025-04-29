import styles from "./contactbody.module.css";
 
import emailjs from "@emailjs/browser";
 
import React, { useState } from "react";
 
export default function ContactBody() {
 
  const [firstName, setFirstName] = useState("");
 
  const [lastName, setLastName] = useState("");
 
  const [email, setEmail] = useState("");
 
  const [phone, setPhone] = useState("");
 
  const [company, setCompany] = useState("");
 
  const [services, setServices] = useState("");
 
  const [message, setMessage] = useState("");
 
  const [errors, setErrors] = useState({});
 
  const validateForm = () => {
 
    const newErrors = {};
 
    const nameRegex = /^[A-Za-z]+$/;
 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
 
    const companyRegex = /^[A-Za-z0-9\s&,.()-]+$/;

 
    if (!firstName.trim()) {
 
      newErrors.firstName = "First name is required";
 
    } else if (!nameRegex.test(firstName)) {
 
      newErrors.firstName = "First name should contain only letters";
 
    } else if (firstName.length > 50) {
 
      newErrors.firstName = "First name should be less than 50 characters";
 
    }
 

 
    if (!lastName.trim()) {
 
      newErrors.lastName = "Last name is required";
 
    } else if (!nameRegex.test(lastName)) {
 
      newErrors.lastName = "Last name should contain only letters";
 
    } else if (lastName.length > 50) {
 
      newErrors.lastName = "Last name should be less than 50 characters";
 
    }

 
    if (!email.trim()) {
 
      newErrors.email = "Email is required";
 
    } else if (!emailRegex.test(email)) {
 
      newErrors.email = "Please enter a valid email address";
 
    }
 

 
    if (!phone.trim()) {
 
      newErrors.phone = "Phone number is required";
 
    } else if (!phoneRegex.test(phone)) {
 
      newErrors.phone = "Please enter a valid phone number (minimum 10 digits)";
 
    }
 

 
    if (!company.trim()) {
 
      newErrors.company = "Company name is required";
 
    } else if (!companyRegex.test(company)) {
 
      newErrors.company = "Company name contains invalid characters";
 
    } else if (company.length > 100) {
 
      newErrors.company = "Company name should be less than 100 characters";
 
    }
 
  
 
    if (!services) {
 
      newErrors.services = "Please select a service option";
 
    }
 

 
    if (!message.trim()) {
 
      newErrors.message = "Message is required";
 
    } else if (message.length < 10) {
 
      newErrors.message = "Message must be at least 10 characters long";
 
    } else if (message.length > 1000) {
 
      newErrors.message = "Message cannot exceed 1000 characters";
 
    }
 
    setErrors(newErrors);
 
    return Object.keys(newErrors).length === 0;
 
  };
 
  const handleSubmit = (e) => {
 
    e.preventDefault();
 
    if (!validateForm()) {
 
      return;
 
    }



      // const serviceId = "service_8ccpkl3";
    // const templateId = "template_7a9sp8o";
    // const publicKey = "1iTUM96xHer9u5iCR";

    
    const serviceId = "service_ve73j9v";
    const templateId = "template_3sw6ujm";
    const publicKey = "SiVI_Q-S-8wOfg3mp"; //dont use this keys for testing use above one or change & use it
 

 
    const templateParams = {
 
      firstName,
 
      lastName,
 
      email,
 
      phone,
 
      company,
 
      services,
 
      message,
 
    };
 
    emailjs
 
      .send(serviceId, templateId, templateParams, publicKey)
 
      .then((response) => {
 
        alert("Message sent successfully!");
 
        setFirstName("");
 
        setLastName("");
 
        setEmail("");
 
        setPhone("");
 
        setCompany("");
 
        setServices("");
 
        setMessage("");
 
        setErrors({});
 
      })
 
      .catch((err) => {
 
        alert("Failed to send message. Please try again.");
 
      });
 
  };
 
  return (
<div className={styles.container}>
<div className={styles.parallaxSection}>
<div className={styles.overlay}>
<h2>Contact Us</h2>
<p>We’d love to hear from you.</p>
<p>Reach out and let’s start the conversation.</p>
</div>
<div className={styles.formContainer}>
<form onSubmit={handleSubmit}>
<div className={styles.inputContainer}>
<div className={styles.fieldContainer}>
<label>First Name</label>
<input
 
                  type="text"
 
                  placeholder="Enter First Name"
 
                  value={firstName}
 
                  onChange={(e) => setFirstName(e.target.value)}
 
                  required
 
                />
 
                {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
</div>
<div className={styles.fieldContainer}>
<label>Last Name</label>
<input
 
                  type="text"
 
                  placeholder="Enter Last Name"
 
                  value={lastName}
 
                  onChange={(e) => setLastName(e.target.value)}
 
                  required
 
                />
 
                {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
</div>
</div>
 
            <div className={styles.inputContainer}>
<div className={styles.fieldContainer}>
<label>Email</label>
<input
 
                  type="email"
 
                  placeholder="Email"
 
                  value={email}
 
                  onChange={(e) => setEmail(e.target.value)}
 
                  required
 
                />
 
                {errors.email && <span className={styles.error}>{errors.email}</span>}
</div>
<div className={styles.fieldContainer}>
<label>Phone Number</label>
<input
 
                  type="tel"
 
                  placeholder="Enter Phone Number"
 
                  value={phone}
 
                  onChange={(e) => setPhone(e.target.value)}
 
                  required
 
                />
 
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
</div>
</div>
<div className={styles.inputContainer}>
<div className={styles.fieldContainer}>
<label>Company</label>
<input
 
                  type="text"
 
                  placeholder="Company"
 
                  value={company}
 
                  onChange={(e) => setCompany(e.target.value)}
 
                  required
 
                />
 
                {errors.company && <span className={styles.error}>{errors.company}</span>}
</div>
<div className={styles.fieldContainer}>
<label>Services</label>
<select
 
                  value={services}
 
                  onChange={(e) => setServices(e.target.value)}
 
                  required
>
<option value="">---Select---</option>
<option value="Immediately">Immediately</option>
<option value="In a few months">In a few months</option>
<option value="This Year">This Year</option>
</select>
 
                {errors.services && <span className={styles.error}>{errors.services}</span>}
</div>
</div>
<div className={styles.fieldContainer}>
<label>Message</label>
<textarea
 
                placeholder="Message"
 
                style={{ width: "192%", height: "80px" }}
 
                value={message}
 
                onChange={(e) => setMessage(e.target.value)}
 
                required
 
              />
 
              {errors.message && <span className={styles.error}>{errors.message}</span>}
</div>
<div>
<button type="submit" className={styles.btn}>
 
                Submit
</button>
</div>
</form>
</div>
</div>
</div>
 
  );
 
}
 