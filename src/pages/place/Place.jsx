// import React from "react";
// import {
//   Card,
//   CardBody,
//   CardSubtitle,
//   CardText,
//   Container,
//   Button,
// } from "reactstrap";
// import axios from "axios";
// import base_url from "../../api/bootapi";
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";

// export default function Place({ place, update }) {
//   const deletePlace = (id) => {
//     axios.delete(`${base_url}/places/${id}`).then(
//       (response) => {
//         toast.success("course deleted");
//         update(id);
//       },
//       (error) => {
//         toast.error("course not deleted...server problem");
//       }
//     );
//   };

//   return (
//     //   <div>
//     //     <Card className="text-center">
//     //   <CardBody >
//     //     <CardSubtitle className="font-weight-bold">{place.title}</CardSubtitle>
//     //     <CardText>{place.description}</CardText>
//     //     <Container className="text-center">
//     //       <Button color="danger">Delete</Button>{" "}
//     //       <Button color="primary ml-3">Update</Button>
//     //     </Container>
//     //   </CardBody>
//     // </Card>
//     // </div>

//     <div>
//       <Card className="text-center">
//         <CardBody>
//           <CardSubtitle className="font-weight-bold">
//             {place.title}
//           </CardSubtitle>
//           <CardText>{place.description}</CardText>
//           <Container className="text-center">
//             <Button
//               color="danger"
//               onClick={() => {
//                 deletePlace(place.id);
//               }}
//             >
//               Delete
//             </Button>{" "}
//             <Button color="primary ml-3">Update</Button>
//           </Container>
//         </CardBody>
//       </Card>
//     </div>
//   );
// }
