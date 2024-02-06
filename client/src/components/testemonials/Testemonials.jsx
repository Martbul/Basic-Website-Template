export default function Testemonials() {
   return (
     <>
       <section
         className="client_section layout_padding"
         style={{ backgroundColor: "#f6f6f6" }}
       >
         <div className="container ">
           <div className="heading_container heading_center">
             <h2>What our clients says</h2>
           </div>
           <div
             id="carouselExampleControls"
             className="carousel slide"
             data-ride="carousel"
           >
             <div className="carousel-inner">
               <div className="carousel-item active">
                 <div className="box">
                   <div className="img-box">
                     <img src="images/client.png" alt="" />
                   </div>
                   <div className="detail-box">
                     <h4>Peter Dimov</h4>
                     <p>
                       I hated weekly shopping so much, but i was the only one
                       able to do in in my family. Now with Bind i don't have to
                       spend time in the store.
                     </p>
                   </div>
                 </div>
               </div>
               <div className="carousel-item ">
                 <div className="box">
                   <div className="img-box">
                     <img src="images/client.png" alt="" />
                   </div>
                   <div className="detail-box">
                     <h4>Ivo Petrov</h4>
                     <p>
                       The price is a bit high for a delivey , but they saved me
                       so much time. Now that i dont have to go shop for
                       groceries i have so much spare time. I was able to finish
                       my docturanture.
                     </p>
                   </div>
                 </div>
               </div>
               <div className="carousel-item ">
                 <div className="box">
                   <div className="img-box">
                     <img src="images/client.png" alt="" />
                   </div>
                   <div className="detail-box">
                     <h4>Martin Kovachki</h4>
                     <p>
                       The service is the best in the whole county. I have never
                       experienced the this type of service and now i love it.
                       The delivery was on time and the products i ordered were
                       in perfect condition
                     </p>
                   </div>
                 </div>
               </div>
             </div>
             <div className="carousel_btn-box">
               <a
                 className="carousel-control-prev"
                 href="#carouselExampleControls"
                 role="button"
                 data-slide="prev"
               >
                 <i className="fa fa-angle-left" aria-hidden="true" />
                 <span className="sr-only">Previous</span>
               </a>
               <a
                 className="carousel-control-next"
                 href="#carouselExampleControls"
                 role="button"
                 data-slide="next"
               >
                 <i className="fa fa-angle-right" aria-hidden="true" />
                 <span className="sr-only">Next</span>
               </a>
             </div>
           </div>
         </div>
       </section>
     </>
   );
}