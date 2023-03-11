import {
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import React from "react";

const AddTour = () => {
  return (
    <>
      <div className="AddTour">
        <Box margin="50px" padding="50px" border="1px solid black">
          <Typography gutterBottom variant="h3" align="center"></Typography>
          <Grid>
            <Card
              style={{ maxWidth: 600, padding: "12px 8px", margin: "0 auto" }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  align="center"
                  padding="2px"
                >
                  ADD TOUR
                </Typography>
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} item>
                      <TextField
                        placeholder="Enter tour title"
                        label="Title"
                        id="Title"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Discription"
                        id="Discription"
                        multiline
                        rows={4}
                        placeholder="Type tour discription here"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        placeholder="Enter no. of days"
                        label="Days"
                        id="Days"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        type="number"
                        placeholder="Enter tour price"
                        label="Price"
                        id="Price"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default AddTour;
