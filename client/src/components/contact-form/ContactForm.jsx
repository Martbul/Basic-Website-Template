export default function ContactForm() {
   return (
     <>
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