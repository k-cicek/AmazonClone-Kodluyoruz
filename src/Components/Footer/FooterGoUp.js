import React, { useState } from "react";
import "./FooterGoUp.css"

const FooterGoUp = () => {
 const [showScroll, setShowScroll] = useState(false);

 const checkScrollTop = () => {
   if (!showScroll && window.pageYOffset > 400) {
     setShowScroll(true);
   } else if (showScroll && window.pageYOffset <= 400) {
     setShowScroll(false);
   }
 };

 // useEffect(() => {
 //   if(showScroll){
 //     return () => setShowScroll[false];
 //   }
 // });
 
 const scrollTop = () => {
   window.scrollTo({ top: 0, behavior: "auto" });
 };

 window.addEventListener("scroll", checkScrollTop);

 return (
   <div className="scrollTop" onClick={scrollTop}>
     <span>Back to top</span>
   </div>
 );
};

export default FooterGoUp

