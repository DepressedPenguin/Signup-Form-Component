import "./style.css";

export default function Navbar() {
  return (
    <>
      <div className="main_nav">
        <div className="logo">{/* <p>LOGO</p> */}</div>
        <div className="sub_nav">
          <ul className="ul_nav">
            <li>Home</li>
            <li>Latest</li>
            <li>Sign In</li>
            <li className="sing_in_link">SignUp</li>
          </ul>
        </div>
      </div>
    </>
  );
}
