import Button from "./Button";

function Footer(){
    return(
  <footer className="text-center text-white" >
    <div className="container p-4 pb-0">
      <section className="">
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3">Register for free</span>
          <Button />
        </p>
      </section>
    </div>

    <div class="text-center p-3" >
      © 2023 Copyright: CED / Dorian
    </div>
  </footer>


        
    );
}
export default Footer;