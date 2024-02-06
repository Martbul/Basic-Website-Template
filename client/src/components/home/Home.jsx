import { Link } from "react-router-dom";
import ContactForm from "./../contact-form/ContactForm";
import OurServices from './../our-services/OurServices';
import Testemonials from './../testemonials/Testemonials';

export default function Home() {
  return (
    <>
      <div
        style={{ backgroundColor: "white" }}
        className="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <h6>Welcome to ALYST</h6>
                    <h2>
                      Put your <em>Business</em> Online and Improve it with
                      <span>AI</span> Products
                    </h2>
                    <p>
                      ALYST is a professional company working for better future.
                      We want to optimize the works in each company trought
                      utilizing AI work
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img
                      className="image1"
                      src="/src/public/images/AI_image.jpg"
                      alt="team meeting"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about section */}
      <section
        className="us-description"
        
      >
        <div className="container">
          
           
            <div className="col-md-6 px-0">
              <div className="detail-box">
                <div className="heading-container">
                  <h2>Who Are We?</h2>
                </div>
                <p className="us-descriptionp">
                  We are an experienced company in the software development fiel
                  and our goal is to improveand grow businesses
                </p>
                </div>
                <div className="btn-box">
                  <a href="">Read More</a>
                </div>
              
            </div>
         
        </div>
      </section>
      {/* end about section */}
      {/* service section */}
  <OurServices/>
      <div className="infos section" id="infos">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="left-image">
                      <img
                        className="img111"
                        src="./src/public/images/AIphoto.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="section-heading">
                      <h2>
                        More <em style={{ color: "#03a4ed" }}>About Us</em>{" "}
                        &amp; What{" "}
                        <span style={{ color: "#3a86ff" }}>We Offer</span>
                      </h2>

                      <p>
                        You are free to use this template for any purpose. You
                        are not allowed to redistribute the downloadable ZIP
                        file of Tale SEO Template on any other template website.
                        Please contact us. Thank you.
                      </p>
                    </div>
                    <div className="skills">
                      <div className="skill-slide marketing">
                        <div className="fill" />
                        <h6>Web Industry</h6>
                        <span>90%</span>
                      </div>
                      <div className="skill-slide digital">
                        <div className="fill" />
                        <h6>Customer Experience</h6>
                        <span>80%</span>
                      </div>
                      <div className="skill-slide media">
                        <div className="fill" />
                        <h6>Customization</h6>
                        <span>95%</span>
                      </div>
                    </div>
                    <p className="more-info">
                      Scale and Grow your business with us!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* client section */}


      <Testemonials />
      
      
      {/* end client section */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div
              className="col-12 text-center"
              data-aos="fade-up"
              data-aos-delay={0}
            >
              <span className="caption">Features</span>
              <h2 className="heading">Advantage of using our services</h2>
              <p>Far from the countries Vokalia and Consonantia</p>
            </div>
          </div>{" "}
          {/* /.row */}
          <div className="row">
            <div
              className="col-lg-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="service horizontal d-flex">
                <div className="service-icon color-1 mb-4">
                  <svg
                    className="bi bi-app-indicator"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                    />
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  </svg>
                </div>{" "}
                {/* /.icon */}
                <div className="service-contents">
                  <h3>Built for Entrepreneurs </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>{" "}
                {/* /.service-contents*/}
              </div>{" "}
              {/* /.service */}
            </div>
            <div
              className="col-lg-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="service horizontal d-flex">
                <div className="service-icon color-2 mb-4">
                  <svg
                    className="bi bi-arrow-repeat"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"
                    />
                  </svg>
                </div>{" "}
                {/* /.icon */}
                <div className="service-contents">
                  <h3>Modern Design</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>{" "}
                {/* /.service-contents*/}
              </div>{" "}
              {/* /.service */}
            </div>
            <div
              className="col-lg-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="service horizontal d-flex">
                <div className="service-icon color-3 mb-4">
                  <svg
                    className="bi bi-briefcase"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
                    />
                  </svg>
                </div>{" "}
                {/* /.icon */}
                <div className="service-contents">
                  <h3>High end comunication</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>{" "}
                {/* /.service-contents*/}
              </div>{" "}
              {/* /.service */}
            </div>
            <div
              className="col-lg-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="service horizontal d-flex">
                <div className="service-icon color-4 mb-4">
                  <svg
                    className="bi bi-collection"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"
                    />
                  </svg>
                </div>{" "}
                {/* /.icon */}
                <div className="service-contents">
                  <h3>Bring Ideas to Life</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>{" "}
                {/* /.service-contents*/}
              </div>{" "}
              {/* /.service */}
            </div>
          </div>{" "}
          {/* /.row */}
        </div>{" "}
        {/* /.container */}
      </div>{" "}
      {/* team section */}

      <ContactForm />
      
      <div class="special-contact">
        <a
          href="https://www.picktime.com/0eed3976-b151-46d5-953f-571266c0a8e8"
          class="ptbkbtn"
          target="_blank"
        >
          <img
            border="none"
            src="https://www.picktime.com/img/widgetButtons/BookingPage/picktime-book-online-darkblue.png"
            alt="Book an appointment with Martin LLC"
          />
        </a>
      </div>
    </>
  );
}
