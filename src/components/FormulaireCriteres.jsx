import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FormulaireCriteres = () => {
  const [formData, setFormData] = useState({
    pays: "",
    ville: "",
    dateDepart: "",
    dateRetour: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }} // Correction pour centrer
    >
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="mb-4 text-center">Critères de Voyage</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Pays :</label>
            <input
              type="text"
              className="form-control"
              name="pays"
              value={formData.pays}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Ville :</label>
            <input
              type="text"
              className="form-control"
              name="ville"
              value={formData.ville}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Date de départ :</label>
            <input
              type="date"
              className="form-control"
              name="dateDepart"
              value={formData.dateDepart}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Date de retour :</label>
            <input
              type="date"
              className="form-control"
              name="dateRetour"
              value={formData.dateRetour}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Budget :</label>
            <input
              type="number"
              className="form-control"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormulaireCriteres;
