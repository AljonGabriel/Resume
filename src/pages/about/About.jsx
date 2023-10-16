import Img from "./../../assets/PF/CorporateHalf.png";
import CV from "./../../assets/CV/WD Resume.pdf";
import "./../../style/style.css";
function About() {
  return (
    <>
      <main className='container-fluid p-0 m-0'>
        <section className='container-fluid bg-dark pt-5 m-0'>
          <section className='container d-md-flex justify-content-center align-items-center '>
            <figure className='p-0 m-0 w-100 d-flex align-item-center justify-content-center'>
              <img src={Img} alt={Img} width={400} />
            </figure>
            <section className='p-2 p-md-0'>
              <p className='text-light m-auto'>
                Welcome to my portfolio! Explore my projects and achievements,
                all in one place. Im excited to share my skills and work with
                you.
              </p>
              <a href={CV} download='CV'>
                <button className='btn btn-primary my-3'>Download</button>
              </a>
            </section>
          </section>
        </section>
        <section className='container-fluid bg-white pt-5 m-0'>
          <section className='container d-md-flex justify-content-center align-items-center '>
            <h2>Under Construct</h2>
          </section>
        </section>
      </main>
    </>
  );
}

export default About;
