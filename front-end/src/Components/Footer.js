import Button from "./Button";
import Register from "./Register";
import React, { useState } from "react";
function Footer() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const openRegister = () => {
    setIsRegisterOpen(true);
  };

  const closeRegister = () => {
    setIsRegisterOpen(false);
  };
  return (
    <footer className="text-center text-white">
      <div className="container p-4 pb-0">
        <section className="">
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">Register for free Here !</span>
            <button
                  onClick={openRegister}
                  className="nav-link me-2 btn btn-link"
                  aria-current="page"
                >
                  Register
                </button>
                <Register isOpen={isRegisterOpen} onClose={closeRegister} />
          </p>
        </section>
      </div>

      <div class="text-center p-3">© 2023 Copyright: CED / Dorian</div>
    </footer>
  );
}
export default Footer;
