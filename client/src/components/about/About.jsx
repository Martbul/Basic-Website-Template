import { Link } from "react-router-dom";
import BlogPosts from "./../blog-posts/BlogPosts";
import ContactForm from './../contact-form/ContactForm';
import OurServices from "./../our-services/OurServices";
import Testemonials from "./../testemonials/Testemonials";

export default function About() {
   return (
     <>
       <section
         className="download-area section-gap"
         id="app"
         style={{ backgroundColor: "white" }}
       >
         <div className="container">
           <div className="row">
             <div className="col-lg-6 download-left">
               <img
                 className="img-fluid"
                 src="./src/public/images/multyAIimage_result.png"
                 alt=""
               />
             </div>
             <div className="col-lg-6 download-right">
               <h1>We are ALYST!</h1>
               <p className="subs">
                 {" "}
                 Our goal is to help business manage empoyees, operate and
                 create custop AI models.
               </p>
               <div className="d-flex flex-row">
                 <div className="buttons">
                   <i className="fa fa-apple" aria-hidden="true" />
                   <div className="desc">
                     <a href="#">
                       <p>
                         <span>Available</span> <br />
                         on App Store
                       </p>
                     </a>
                   </div>
                 </div>
                 <div className="buttons">
                   <i className="fa fa-android" aria-hidden="true" />
                   <div className="desc">
                     <a href="#">
                       <p>
                         <span>Available</span> <br />
                         on Play Store
                       </p>
                     </a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>{" "}
    
       
       <section
         className="product-counter-section"
         style={{ background: "#3a86ff" }}
       >
         <div className="product-counter-wrap">
           <div className="container">
             <div className="row">
               <div className="col-lg-6 col-12">
                 <div className="counter-content-wrap">
                   <i className="lni lni-rocket" />
                   <h6 className="counter-title">
                     <strong>Trusted by 2000+</strong>
                   </h6>
                   <p className="counter-text">
                     High performing team worldwide
                   </p>
                 </div>
               </div>
               <div className="col-lg-6 col-12">
                 <ul className="counter-list list-inline text-right">
                   <li>
                     <span className="number count">238</span>
                     <span className="title">Happy Clients</span>
                   </li>
                   <li>
                     <span className="number count">4</span>
                     <span className="title">Wining Award</span>
                   </li>
                   <li>
                     <span className="number count">34</span>
                     <span className="title">Team Member</span>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* /End Counter Section*/}

       
       < OurServices />
       

       <section
         style={{ marginTop: "8%", marginBottom: "8%" }}
         id="faq"
         className="faq-section section"
       >
         <div className="container">
           <div className="row">
             <div className="col-12">
               <div className="section-title">
                 <h2>Frequently asked questions</h2>
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col-12">
               <div id="accordion" className="mt-4 faq-container">
                 <div className="simple-card">
                   <div className="card-header" id="headingOne">
                     <h5 className="mb-0">
                       <button
                         className=" btn-link collapsed"
                         data-toggle="collapse"
                         data-target="#collapseOne"
                         aria-expanded="false"
                         aria-controls="collapseOne"
                       >
                         <span className="arrow-container" /> How to start
                         delivering?
                       </button>
                     </h5>
                   </div>
                   <div
                     id="collapseOne"
                     className="collapse"
                     aria-labelledby="headingOne"
                     data-parent="#accordion"
                   >
                     <div className="card-body">
                       You can start delivering by making an delivering account
                       - sign up in become a deliver page.
                     </div>
                   </div>
                 </div>
                 <div className="simple-card">
                   <div className="card-header" id="headingTwo">
                     <h5 className="mb-0">
                       <button
                         className=" btn-link"
                         data-toggle="collapse"
                         data-target="#collapseTwo"
                         aria-expanded="true"
                         aria-controls="collapseTwo"
                       >
                         <span className="arrow-container" /> How to order?
                       </button>
                     </h5>
                   </div>
                   <div
                     id="collapseTwo"
                     className="collapse show"
                     aria-labelledby="headingTwo"
                     data-parent="#accordion"
                   >
                     <div className="card-body card-with-button">
                       You can make orders from order page. Then put your
                       personal data into the form ad make your order.This order
                       will be delivered to you every single week.
                       {/* <a href="#" className=" btn">
                    Go to documentation
                  </a> */}
                     </div>
                   </div>
                 </div>
                 <div className="simple-card">
                   <div className="card-header" id="headingThree">
                     <h5 className="mb-0">
                       <button
                         className=" btn-link collapsed"
                         data-toggle="collapse"
                         data-target="#collapseThree"
                         aria-expanded="false"
                         aria-controls="collapseThree"
                       >
                         <span className="arrow-container" /> How much money I
                         will make?
                       </button>
                     </h5>
                   </div>
                   <div
                     id="collapseThree"
                     className="collapse"
                     aria-labelledby="headingThree"
                     data-parent="#accordion"
                   >
                     <div className="card-body">
                       You wil make money with every delivery you make. You get
                       a percentage of the orders price-4%. You stack your
                       deliveries at once and deliver them all together.
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>


       <Testemonials />
       
       
       <div className="untree_co-section" id="testimonials-section">
         <div className="container">
           <div className="row justify-content-center">
             <div className="col-lg-12" data-aos="fade" data-aos-delay={200}>
               <div className="owl-2-slider owl-carousel">
                 <div className="item">
                   <div className="untree_co-testimonial d-flex">
                     <div className="text">
                       <blockquote>
                         “Separated they{" "}
                         <span className="highlight">
                           live in Bookmarksgrove right at the coast of the
                           Semantics
                         </span>
                         , a large language ocean. A small river named Duden
                         flows by their place and supplies it with the necessary
                         regelialia. ”
                       </blockquote>
                       <div className="author d-flex">
                         <div className="pic mr-3">
                           <img
                             src="images/person_1.jpg"
                             alt="Image"
                             className="img-fluid"
                           />
                         </div>
                         <div>
                           <strong className="d-block">Cameron Fisher</strong>
                           <span className="d-block">
                             Facebook, Product Lead
                           </span>
                         </div>
                       </div>
                     </div>
                   </div>{" "}
                   {/* /.untree_co-testimonial */}
                 </div>
                 <div className="item">
                   <div className="untree_co-testimonial d-flex">
                     <div className="text">
                       <blockquote>
                         “Separated they{" "}
                         <span className="highlight">
                           live in Bookmarksgrove right at the coast of the
                           Semantics
                         </span>
                         , a large language ocean. A small river named Duden
                         flows by their place and supplies it with the necessary
                         regelialia. ”
                       </blockquote>
                       <div className="author d-flex">
                         <div className="pic mr-3">
                           <img
                             src="images/person_2.jpg"
                             alt="Image"
                             className="img-fluid"
                           />
                         </div>
                         <div>
                           <strong className="d-block">Jenny Wilson</strong>
                           <span className="d-block">
                             Facebook, Product Lead
                           </span>
                         </div>
                       </div>
                     </div>
                   </div>{" "}
                   {/* /.untree_co-testimonial */}
                 </div>
                 <div className="item">
                   <div className="untree_co-testimonial d-flex">
                     <div className="text">
                       <blockquote>
                         “Separated they{" "}
                         <span className="highlight">
                           live in Bookmarksgrove right at the coast of the
                           Semantics
                         </span>
                         , a large language ocean. A small river named Duden
                         flows by their place and supplies it with the necessary
                         regelialia. ”
                       </blockquote>
                       <div className="author d-flex">
                         <div className="pic mr-3">
                           <img
                             src="images/person_3.jpg"
                             alt="Image"
                             className="img-fluid"
                           />
                         </div>
                         <div>
                           <strong className="d-block">James Anderson</strong>
                           <span className="d-block">
                             Facebook, Product Lead
                           </span>
                         </div>
                       </div>
                     </div>
                   </div>{" "}
                   {/* /.untree_co-testimonial */}
                 </div>
               </div>
             </div>
           </div>{" "}
           {/* /.row */}
         </div>{" "}
         {/* /.container */}
       </div>{" "}
       {/* /.untree_co-section */}
       <div className="untree_co-section" id="about-section">
         <div className="container">
           <div className="row justify-content-between mb-5">
             <div
               className="col-lg-8 mb-4 mb-lg-0"
               data-aos="fade-up"
               data-aos-delay={100}
             >
               <img
                 src="images/undraw_getting_coffee_re_f2do.svg"
                 alt="Image"
                 className="img-fluid"
               />
             </div>{" "}
             {/* /.col-lg-6 */}
             <div className="col-lg-4">
               <div className="mb-4" data-aos="fade-up" data-aos-delay={0}>
                 <span className="caption">About</span>
                 <h2 className="heading">The Company</h2>
               </div>
               <div className="mb-4" data-aos="fade-up" data-aos-delay={100}>
                 <p>
                   Far far away, behind the word mountains, far from the
                   countries Vokalia and Consonantia, there live the blind
                   texts. Separated they live in Bookmarksgrove right at the
                   coast
                 </p>
                 <p>
                   Separated they{" "}
                   <span className="highlight">
                     live in Bookmarksgrove right at the coast of the Semantics
                   </span>
                   , a large language ocean. A small river named Duden flows by
                   their place and supplies it with the necessary regelialia.
                 </p>
               </div>
               <ul
                 className="list-unstyled ul-check primary mb-4"
                 data-aos="fade-up"
                 data-aos-delay={200}
               >
                 <li>There live the blind texts</li>
                 <li>Far far away behind the word</li>
                 <li>Their place and supplies</li>
               </ul>
               <div className="row count-numbers">
                 <div
                   className="col-6 col-lg-6"
                   data-aos="fade-up"
                   data-aos-delay={0}
                 >
                   <span className="counter d-block">
                     <span data-number={24}>0</span>
                     <span>M</span>
                   </span>
                   <span className="caption-2">Members</span>
                 </div>
                 <div
                   className="col-6 col-lg-6"
                   data-aos="fade-up"
                   data-aos-delay={100}
                 >
                   <span className="counter d-block">
                     <span data-number={121}>0</span>
                     <span />
                   </span>
                   <span className="caption-2">Team</span>
                 </div>
               </div>
             </div>{" "}
             {/* /.col-lg-6 */}
           </div>{" "}
           {/* /.row */}
           <div className="row pt-5">
             <div className="col-12 mb-5" data-aos="fade-up">
               <span className="caption">Team</span>
               <h2 className="heading">The Team</h2>
             </div>
             <div
               className="col-6 col-lg-4"
               data-aos="fade-up"
               data-aos-delayt={100}
             >
               <img
                 src="images/person_1.jpg"
                 alt="Image"
                 className="img-fluid mb-3 w-50 rounded-circle"
               />
               <h3 className="h5 font-weight-bold">Job Smith</h3>
               <p>
                 Separated they{" "}
                 <span className="highlight">
                   live in Bookmarksgrove right at the coast of the Semantics
                 </span>
                 , a large language ocean. A small river named Duden flows by
                 their place and supplies it with the necessary regelialia.
               </p>
             </div>
             <div
               className="col-6 col-lg-4"
               data-aos="fade-up"
               data-aos-delayt={200}
             >
               <img
                 src="images/person_2.jpg"
                 alt="Image"
                 className="img-fluid mb-3 w-50 rounded-circle"
               />
               <h3 className="h5 font-weight-bold">Jenny Wilson</h3>
               <p>
                 Separated they{" "}
                 <span className="highlight">
                   live in Bookmarksgrove right at the coast of the Semantics
                 </span>
                 , a large language ocean. A small river named Duden flows by
                 their place and supplies it with the necessary regelialia.
               </p>
             </div>
             <div
               className="col-6 col-lg-4"
               data-aos="fade-up"
               data-aos-delayt={300}
             >
               <img
                 src="images/person_3.jpg"
                 alt="Image"
                 className="img-fluid mb-3 w-50 rounded-circle"
               />
               <h3 className="h5 font-weight-bold">Richard Cruise</h3>
               <p>
                 Separated they{" "}
                 <span className="highlight">
                   live in Bookmarksgrove right at the coast of the Semantics
                 </span>
                 , a large language ocean. A small river named Duden flows by
                 their place and supplies it with the necessary regelialia.
               </p>
             </div>
           </div>
         </div>{" "}
         {/* /.container */}
       </div>{" "}
       <BlogPosts />
       <ContactForm />
     </>
   );
}