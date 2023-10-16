import Img from "./../../assets/PF/CorporateHalf.png";
function About() {
  return (
    <>
      <main className='container-fluid p-0 m-0'>
        <section className='container-fluid bg-dark'>
          <section className='d-flex align-items-center justify-content-center'>
            <figure className='container container-lg d-sm-flex align-items-center justify-content-center m-0'>
              <img src={Img} alt={Img} width={400} />

              <figcaption className='container container-lg w-50 text-light'>
                Welcome to my portfolio! Explore my projects and achievements,
                all in one place. I'm excited to share my skills and work with
                you.
              </figcaption>
            </figure>
          </section>
        </section>
      </main>
    </>
  );
}

export default About;
