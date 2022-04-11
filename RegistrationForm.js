import { child, push, ref, update } from "firebase/database";
import { useState } from "react";
import { database } from "../firebase";
import "./style.css";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [cep, setCep] = useState(null);

  const handleSubmit = async() => {
    const info = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response)=> response.json());
    console.log(info);
    const obj = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      ...info
    };
    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    return update(ref(database), updates);
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            Nome{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
            placeholder="Nome"
          />
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">
            Sobrenome{" "}
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            value={lastName}
            className="form__input"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Sobrenome"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Senha{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            Confirme sua Senha
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Senha"
          />
        </div>

        <div className="cep">
          <label className="form__label" for="cep">
            CEP{" "}
          </label>
          <input
            className="form__input"
            type="number" 
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            id="cep"
            placeholder="CEP"
          />
        </div>

      </div>
      <div class="footer">
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Registrar-se
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;
