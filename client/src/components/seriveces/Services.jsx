import { Link } from "react-router-dom";
import BlogPosts from './../blog-posts/BlogPosts';
import OurServices from "./../our-services/OurServices";

export default function Services() {
  return (
    <>
      <OurServices />
      
      <div className="untree_co-section bg-light">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 order-lg-2 js-custom-dots">
              <a
                href="#"
                className="service link horizontal d-flex active"
                data-aos="fade-left"
                data-aos-delay={0}
              >
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
                  <h3>Built for Developers</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
                </div>{" "}
                {/* /.service-contents*/}
              </a>{" "}
              {/* /.service */}
              <a
                href="#"
                className="service link horizontal d-flex"
                data-aos="fade-left"
                data-aos-delay={100}
              >
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
                    countries Vokalia and Consonantia.
                  </p>
                </div>{" "}
                {/* /.service-contents*/}
              </a>{" "}
              {/* /.service */}
              <a
                href="#"
                className="service link horizontal d-flex"
                data-aos="fade-left"
                data-aos-delay={200}
              >
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
                  <h3>Build Stunning Websites</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
                </div>{" "}
                {/* /.service-contents*/}
              </a>{" "}
              {/* /.service */}
            </div>
            <div className="col-lg-7">
              <div className="img-shadow">
                <div className="owl-single no-dots owl-carousel">
                  <div className="item">
                    <span className="number">1/3</span>
                    <img
                      src="images/dashboard.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="item">
                    <span className="number">2/3</span>
                    <img
                      src="images/dashboard.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="item">
                    <span className="number">3/3</span>
                    <img
                      src="images/dashboard.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* /.col-md-4 */}
          </div>{" "}
          {/* /.row */}
        </div>{" "}
        {/* /.container */}
      </div>{" "}
      {/* /.untree_co-section */}
      <div className="untree_co-section" id="features-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <span className="caption" data-aos="fade-up" data-aos-delay={0}>
                Digital Services
              </span>
              <h3
                className="heading mb-4"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                A complete solution for your business.
              </h3>
              <div className="mb-4" data-aos="fade-up" data-aos-delay={200}>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>{" "}
              {/* /.mb-4 */}
            </div>
            <div className="col-lg-7" data-aos="fade-up" data-aos-delay={400}>
              <a>
                <img
                  src="https://assets.entrepreneur.com/content/3x2/2000/1602186250-GettyImages-1150199386.jpg"
                  alt="Image"
                  className="img-fluid img-shadow"
                />
              </a>
            </div>{" "}
            {/* /.col-md-4 */}
          </div>{" "}
          {/* /.row */}
        </div>{" "}
        {/* /.container */}
      </div>{" "}
      {/* /.untree_co-section */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-4" data-aos="fade-up" data-aos-delay={300}>
                <div className="untree_co-testimonial d-flex">
                  <div className="text">
                    <div className="author d-flex mb-3">
                      <div className="pic mr-3">
                        <img
                          src="images/person_1.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <strong className="d-block font-weight-bold h5 mb-0">
                          Cameron Fisher
                        </strong>
                        <span className="d-block">Facebook, Product Lead</span>
                      </div>
                    </div>
                    <blockquote>
                      “Separated they{" "}
                      <span className="highlight">
                        live in Bookmarksgrove right at the coast of the
                        Semantics
                      </span>
                      , a large language ocean. A small river named Duden flows
                      by their place and supplies it with the necessary
                      regelialia. ”
                    </blockquote>
                  </div>
                </div>{" "}
                {/* /.untree_co-testimonial */}
              </div>{" "}
              {/* /.mb-4 */}
            </div>
            <div className="col-lg-6">
              <div className="mb-4" data-aos="fade-up" data-aos-delay={300}>
                <div className="untree_co-testimonial d-flex">
                  <div className="text">
                    <div className="author d-flex mb-3">
                      <div className="pic mr-3">
                        <img
                          src="images/person_2.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <strong className="d-block font-weight-bold h5 mb-0">
                          Jenny Wilson
                        </strong>
                        <span className="d-block">Facebook, Product Lead</span>
                      </div>
                    </div>
                    <blockquote>
                      “Separated they{" "}
                      <span className="highlight">
                        live in Bookmarksgrove right at the coast of the
                        Semantics
                      </span>
                      , a large language ocean. A small river named Duden flows
                      by their place and supplies it with the necessary
                      regelialia. ”
                    </blockquote>
                  </div>
                </div>{" "}
                {/* /.untree_co-testimonial */}
              </div>{" "}
              {/* /.mb-4 */}
            </div>
          </div>
        </div>
      </div>
      {/* /.untree_co-section */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5" data-aos="fade-up">
              <span className="caption">Features</span>
              <h2 className="heading">More Features</h2>
            </div>
            <div
              className="col-md-6 mb-4 mb-lg-0 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={0}
            >
              <div className="service">
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
                  <h3>Built for Developers</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>{" "}
                {/* /.service-contents*/}
              </div>{" "}
              {/* /.service */}
            </div>{" "}
            {/* /.col-lg-3 */}
            <div
              className="col-md-6 mb-4 mb-lg-0 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="service">
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
            </div>{" "}
            {/* /.col-lg-3 */}
            <div
              className="col-md-6 mb-4 mb-lg-0 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="service">
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
                  <h3>Build Stunning Websites</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>{" "}
                {/* /.service-contents*/}
              </div>{" "}
              {/* /.service */}
            </div>{" "}
            {/* /.col-lg-3 */}
            <div
              className="col-md-6 mb-4 mb-lg-0 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="service">
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
            </div>{" "}
            {/* /.col-lg-3 */}
          </div>{" "}
          {/* /.row */}
        </div>{" "}
        {/* /.container */}
      </div>{" "}
      <BlogPosts />
      <div className="untree_co-section" id="contact-section">
        <div className="container">
          <div className="row mb-5" data-aos="fade-up" data-aos-delay={0}>
            <div className="col-12 text-center">
              <span className="caption">Contact</span>
              <h2 className="heading">Get In Touch</h2>
              <p>Far from the countries Vokalia and Consonantia</p>
            </div>
          </div>{" "}
          {/* /.row */}
          <div className="row">
            <div className="col-lg-7">
              <form
                className="contact-form"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label className="" htmlFor="fname">
                        First name
                      </label>
                      <input type="text" className="form-control" id="fname" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label className="" htmlFor="lname">
                        Last name
                      </label>
                      <input type="text" className="form-control" id="lname" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="" htmlFor="email">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label className="" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name=""
                    className="form-control"
                    id="message"
                    cols={30}
                    rows={5}
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>{" "}
            {/* /.col-lg-7 */}
            <div
              className="col-lg-4 ml-auto"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="quick-contact">
                <h3 className="h5 mb-4">Contact Info</h3>
                <address className="text-black d-flex">
                  <span className="mt-1 icon-room mr-2" />
                  <span>43 Raymouth Rd. Baltemoer, London 3910</span>
                </address>
                <ul className="list-unstyled ul-links mb-4">
                  <li>
                    <a href="tel://11234567890" className="d-flex">
                      <span className="mt-1 icon-phone mr-2" />
                      <span>+1(123)-456-7890</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel://11234567890" className="d-flex">
                      <span className="mt-1 icon-phone mr-2" />
                      <span>+1(123)-456-7890</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@mydomain.com" className="d-flex">
                      <span className="mt-1 icon-envelope mr-2" />
                      <span>info@mydomain.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://untree.co/"
                      target="_blank"
                      className="d-flex"
                    >
                      <span className="mt-1 icon-globe mr-2" />
                      <span>https://untree.co/</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>{" "}
            {/* /.col-lg-4 */}
          </div>{" "}
          {/* /.row */}
        </div>{" "}
        {/* /.container */}
      </div>{" "}
    </>
  );
}
