import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";

import AdNavbar from "../AdNavbar/AdNavbar";
import { getReviews, deleteReview } from "../../../service/api";

const StyledTable = styled(Table)`
  width: 95%;
  margin: 40px auto 40px auto;
`;

const Thead = styled(TableRow)`
  background: #520f54;

  & > th {
    color: #fff;
    font-size: 20px;
  }
`;

const TRow = styled(TableRow)`
  background: #c6deff;
  & > td {
    font-size: 20px;
  }
`;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewDetails();
  }, []);

  const deleteReviewData = async (id) => {
    await deleteReview(id);
    getReviewDetails();
  };

  const getReviewDetails = async () => {
    let response = await getReviews();
    // console.log(response);
    setReviews(response.data);
  };

  return (
    <div>
      <AdNavbar />
      <Box margin="50px" border="1px solid black">
        <StyledTable>
          <TableHead>
            <Thead>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Reviews</TableCell>
              <TableCell></TableCell>
            </Thead>
          </TableHead>

          <TableBody>
            {reviews.map((review) => (
              <TRow key={review.id}>
                <TableCell>{review.id}</TableCell>
                <TableCell>{review.name}</TableCell>
                <TableCell>{review.date}</TableCell>
                <TableCell>{review.reviewtext}</TableCell>


                {/* <Link to="/profile" onClick={deleteUserData(user.id)} className="ssubmit">
                <input type="submit" value="Submit" />
              </Link> */}

                <Button
                  variant="contained"
                  style={{ marginTop: 12, marginRight: 15 }}
                  onClick={() => deleteReviewData(review.id)}
                >
                  Delete
                </Button>
              </TRow>
            ))}
          </TableBody>
        </StyledTable>
      </Box>
    </div>
  );
};

export default Reviews;
