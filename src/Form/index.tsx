import { useRef, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
  // LIST OF ERROES
  const [errors, Seterrors] = useState([]);
  const [success, Setsuccess] = useState(false);
  const mark_emailRef = useRef();
  const marrk_passwordRef = useRef();
  const mark_repassword = useRef();
  const mark_checkbox = useRef();

  const emailRef = useRef();
  const passwordRef = useRef();
  const repasswordRef = useRef();
  const checkboxRef = useRef();

  // VALADTION FUNCTION
  const formValaditon = () => {
    Seterrors([]);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const repassword = repasswordRef.current.value;
    const ischeckbox = checkboxRef.current.checked;
    let isFormValid = true;

    if (email.trim() === "") {
      Seterrors((prev) => {
        return [...prev, "EMAIL MISSING!"];
      });
      mark_emailRef.current.classList.remove("fill_mark");
      isFormValid = false;
    } else {
      mark_emailRef.current.classList.add("fill_mark");
    }

    // PASSWORD

    if (password.trim() === "") {
      Seterrors((prev) => {
        return [...prev, "Password MISSING!"];
      });
      marrk_passwordRef.current.classList.remove("fill_mark");
      isFormValid = false;
    } else {
      marrk_passwordRef.current.classList.add("fill_mark");
    }

    // RE PASSWORD
    if (repassword.trim() === "") {
      Seterrors((prev) => {
        return [...prev, "Re-enter Password MISSING!"];
      });
      mark_repassword.current.classList.remove("fill_mark");
      isFormValid = false;
    } else if (repassword !== password) {
      Seterrors((prev) => {
        return [...prev, "Passwords do not match!"];
      });
      mark_repassword.current.classList.remove("fill_mark");
      isFormValid = false;
    } else {
      mark_repassword.current.classList.add("fill_mark");
    }

    // CHECKBOX

    if (!ischeckbox) {
      Seterrors((prev) => {
        return [...prev, "Fill The Privacy!"];
      });
      mark_checkbox.current.classList.remove("fill_mark");
      isFormValid = false;
    } else {
      mark_checkbox.current.classList.add("fill_mark");
    }

    Setsuccess(isFormValid);

    // if (isFormValid) {
    //   Setsuccess(true);
    //   Seterrors([]);
    // } else {
    //   Setsuccess(false);
    // }
  };

  // SUBMOT FORM
  const submitForm = (e) => {
    e.preventDefault();
    formValaditon();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      formValaditon();
    }
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
                <ul>
                  <li key={key}>{error}</li>
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
            {/* PASSWORD */}
            <div className="form-group form_container">
              <label htmlFor="Password">Password :</label>
              <input
                type="password"
                placeholder="Pssword"
                className="form-control"
                ref={passwordRef}
              />
            </div>
            {/* REWRITE PASSWORD */}
            <div className="form-group form_container">
              <label htmlFor="Password">Confirm Password :</label>
              <input
                type="password"
                placeholder="Pssword Again"
                className="form-control"
                ref={repasswordRef}
              />
            </div>
            {/* CHECKBOX */}
            <div className="form-group form_container">
              <label htmlFor="Password" className="label_checkbox">
                Privacy Policy{" "}
              </label>
              <input
                ref={checkboxRef}
                type="checkbox"
                className="custom-checkbox"
              />
            </div>
            {/* BUTOON_SUBBMIT */}
            <div className="form-group form_container">
              <button onKeyUp={handleKeyPress} onClick={submitForm}>
                SING UP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
