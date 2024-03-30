import { useRef, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<boolean>(false);

  const mark_emailRef = useRef<HTMLDivElement>(null);
  const marrk_passwordRef = useRef<HTMLDivElement>(null);
  const mark_repassword = useRef<HTMLDivElement>(null);
  const mark_checkbox = useRef<HTMLDivElement>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const repasswordRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const formValidation = () => {
    setErrors([]);
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const repassword = repasswordRef.current?.value;
    const isCheckbox = checkboxRef.current?.checked;
    let isFormValid = true;

    if (!email || email.trim() === "") {
      setErrors((prev) => [...prev, "EMAIL MISSING!"]);
      if (mark_emailRef.current)
        mark_emailRef.current.classList.remove("fill_mark");
      isFormValid = false;
    } else {
      if (mark_emailRef.current)
        mark_emailRef.current.classList.add("fill_mark");
    }

    if (!password || password.trim() === "") {
      setErrors((prev) => [...prev, "Password MISSING!"]);
      if (marrk_passwordRef.current)
        marrk_passwordRef.current.classList.remove("fill_mark");
      isFormValid = false;
    } else {
      if (marrk_passwordRef.current)
        marrk_passwordRef.current.classList.add("fill_mark");
    }

    if (!repassword || repassword.trim() === "") {
      setErrors((prev) => [...prev, "Re-enter Password MISSING!"]);
      if (mark_repassword.current)
        mark_repassword.current.classList.remove("fill_mark");
      isFormValid = false;
    } else if (repassword !== password) {
      setErrors((prev) => [...prev, "Passwords do not match!"]);
      if (mark_repassword.current)
        mark_repassword.current.classList.remove("fill_mark");
      isFormValid = false;
    } else {
      if (mark_repassword.current)
        mark_repassword.current.classList.add("fill_mark");
    }

    if (!isCheckbox) {
      setErrors((prev) => [...prev, "Fill The Privacy!"]);
      if (mark_checkbox.current)
        mark_checkbox.current.classList.remove("fill_mark");
      isFormValid = false;
    } else {
      if (mark_checkbox.current)
        mark_checkbox.current.classList.add("fill_mark");
    }

    setSuccess(isFormValid);
  };

  const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    formValidation();
  };

  return (
    <>
      <div className="main_container">
        <div className="form_zone">
          {success ? (
            <div className="alert alert-success">
              <h5>Account Created, Redirect ...</h5>
            </div>
          ) : (
            <div className="progress_bar_checks">
              <div ref={mark_emailRef} className="mark_progress">
                EMAIL
              </div>
              <div ref={marrk_passwordRef} className="mark_progress">
                PASSWORD
              </div>
              <div ref={mark_repassword} className="mark_progress">
                RE-PASSWORD
              </div>
              <div ref={mark_checkbox} className="mark_progress">
                CHECKBOX
              </div>
            </div>
          )}
          {errors.length > 0 ? (
            <div className="alert alert-danger">
              {errors.map((error, key) => (
                <ul key={key}>
                  <li>{error}</li>
                </ul>
              ))}
            </div>
          ) : (
            ""
          )}
          <div className="input">
            <div className="headline_singup">
              <h1>SING UP</h1>
              <p id="solgan">Unlock a Bright Future</p>
            </div>
            <div className="form-group form_container">
              <label htmlFor="Email">Email :</label>
              <input
                ref={emailRef}
                type="text"
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="form-group form_container">
              <label htmlFor="Password">Password :</label>
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                ref={passwordRef}
              />
            </div>
            <div className="form-group form_container">
              <label htmlFor="Password">Confirm Password :</label>
              <input
                type="password"
                placeholder="Password Again"
                className="form-control"
                ref={repasswordRef}
              />
            </div>
            <div className="form-group form_container">
              <label htmlFor="Password" className="label_checkbox">
                Privacy Policy
              </label>
              <input
                ref={checkboxRef}
                type="checkbox"
                className="custom-checkbox"
              />
            </div>
            <div className="form-group form_container">
              <button onClick={submitForm}>SING UP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
