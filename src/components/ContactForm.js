import React, { useState } from "react";
import "../Styles/ContactForm.css";
function ContactForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email } = formData;

    // Validation de base
    if (username === "" || email === "") {
      alert("Tous les champs sont requis!");
      return;
    }

    // Envoyer les données du formulaire
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Nom d'utilisateur :</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email :</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <button type="submit">Soumettre</button>
    </form>
  );
}

export default ContactForm;
