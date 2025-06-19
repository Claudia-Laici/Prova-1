import { useState } from "react";
 
function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    country: "",
    gender: "",
    newsletter: false,
    interests: [],
  });
 
  const [errors, setErrors] = useState({});
 
  // Valida i campi obbligatori
  const validateForm = () => {
    const newErrors = {};
 
    if (!formData.username) {
      newErrors.username = "Il campo username è obbligatorio";
    } else if (formData.username.length < 3) {
      newErrors.username =
        "Il campo username deve contenere almeno 3 caratteri";
    }
 
    if (!formData.email.trim()) {
      newErrors.email = "Email obbligatoria";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email non valida";
    }
 
    if (!formData.password) {
      newErrors.password = "Password obbligatoria";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password deve essere almeno 6 caratteri";
    }
 
    if (!formData.country) {
      newErrors.country = "Seleziona un paese";
    }
 
    if (!formData.gender) {
      newErrors.gender = "Seleziona un genere";
    }
 
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 
  // Aggiorna un campo semplice
  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
 
    // Rimuove l’errore relativo al campo se esiste
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };
 
  // Gestione checkbox multipli
  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };
 
  // Submit del form
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (validateForm()) {
      alert("Registrazione completata!");
      console.log("Dati inviati:", formData);
    }
  };
 
  return (
    <form onSubmit={handleSubmit}>
      {/* Username */}
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) => updateField("username", e.target.value)}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>
 
      {/* Email */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
 
      {/* Password */}
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => updateField("password", e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
 
      {/* Età */}
      <div>
        <label>Età:</label>
        <input
          type="number"
          value={formData.age}
          onChange={(e) => updateField("age", e.target.value)}
        />
      </div>
 
      {/* Paese */}
      <div>
        <label>Paese:</label>
        <select
          value={formData.country}
          onChange={(e) => updateField("country", e.target.value)}
        >
          <option value="">Seleziona un paese</option>
          <option value="italy">Italia</option>
          <option value="france">Francia</option>
          <option value="germany">Germania</option>
        </select>
        {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
      </div>
 
      {/* Genere */}
      <div>
        <label>Genere:</label>
        <label>
          <input
            type="radio"
            value="male"
            checked={formData.gender === "male"}
            onChange={(e) => updateField("gender", e.target.value)}
          />
          Maschio
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={formData.gender === "female"}
            onChange={(e) => updateField("gender", e.target.value)}
          />
          Femmina
        </label>
        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
      </div>
 
      {/* Newsletter */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={formData.newsletter}
            onChange={(e) => updateField("newsletter", e.target.checked)}
          />
          Iscriviti alla newsletter
        </label>
      </div>
 
      {/* Interessi */}
      <div>
        <label>Interessi:</label>
        {["Sport", "Musica", "Viaggi", "Tecnologia"].map((interest) => (
          <label key={interest}>
            <input
              type="checkbox"
              checked={formData.interests.includes(interest)}
              onChange={() => handleInterestChange(interest)}
            />
            {interest}
          </label>
        ))}
      </div>
 
      {/* Pulsante invio */}
      <button type="submit">Registrati</button>
 
      {/* Debug dati */}
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
        }}
      >
        <h4>Anteprima dati:</h4>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </form>
  );
}
 
export default RegistrationForm;