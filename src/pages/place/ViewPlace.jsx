// import React, { useEffect, useState } from "react";
// import Place from "./Place";
// import base_url from "../../api/bootapi";
// import axios from "axios";
// import { Container } from "reactstrap";
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";

// export default function ViewPlace() {
//   useEffect(() => {
//     document.title = "All places by SOAR team";
//   }, []);

//   //function to call server
//   const getAllPlacesFromServer = () => {
//     axios.get(`${base_url}/Place`).then(
//       (response) => {
//         //success
//         console.log(response.data);
//         toast.success("courses has been loaded", {
//           position: "bottom-center",
//         });
//         setPlaces(response.data);
//       },
//       (error) => {
//         //errorcode
//         console.log(error);
//         toast.error("Something went Wrong", {
//           position: "bottom-center",
//         });
//       }
//     );
//   };
//   //calling loading place function
//   useEffect(() => {
//     getAllPlacesFromServer();
//   }, []);

//   const updatePlaces = (id) => {
//     setPlaces(places.filter((p) => p.id !== id));
//   };

//   const [places, setPlaces] = useState([]);
//   return (
//     <div>
//       <Container className="text-center ">
//         <h1>
//           <b>here is all places to view</b>
//         </h1>
//       </Container>

//       {places.length > 0
//         ? places.map((item) => (
//             <Place key={item.id} place={item} update={updatePlaces} />
//           ))
//         : "No Courses"}
//     </div>
//   );
// }
