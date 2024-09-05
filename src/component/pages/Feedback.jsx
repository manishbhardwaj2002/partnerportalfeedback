import * as React from "react";
import {
  Box,
  Typography,
  Rating,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Button,
} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
// import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

const Feedback = () => {
  const [starValue, setStarValue] = React.useState(0);
  // const [dashboard, setDashboard] = React.useState("");
  // const [subscribe, setSubscribe] = React.useState("");
  // const [sales, setSales]= React.useState('');
  // const [leads, setLeds]= React.useState('');
  const [hover, setHover] = React.useState("");
  const [formValue, setFormValue] = React.useState({
    dashboard: "",
    subscribe: "",
    featuretext: "",
    sales: "",
    leads: "",
    salestext: "",
    suggesttext: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(JSON.stringify(formValue));
  };

  // const handleChangeSubscribe = (event) => {
  //   setSubscribe(event.target.value);
  // };

  // const handleChangeSales = (event) => {
  //   setSales(event.target.value);
  // };
  // const handleChangeLeads = (event) => {
  //   setLeds(event.target.value);
  // };
  function getLabelText(value) {
    return `${value} Star${value !== 0 ? "s" : ""}, ${labels[value]}`;
  }
  // console.log(dashboard);
  // console.log(subscribe);
  // console.log(sales);
  // console.log(leads);

  return (
    <>
      <Box sx={{ padding: "24px" }}>
        <Box>
          <WestIcon />
        </Box>
        <form style={{ backgroundColor: "#F8FAFF" }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "25px",
              display: "flexwrap",
            }}
          >
            <Box component="div">
              <Typography
                component="h3"
                sx={{
                  color: "#222448",
                  fontSize: "18px",
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: "Normal",
                  marginBottom: "3px",
                }}
              >
                Your Opinion Matters to Us!
              </Typography>
            </Box>
            <Box component="div">
              <Typography
                component="p"
                sx={{
                  color: "#707070",
                  fontSize: "12px",
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: "Normal",
                  marginBottom: "30px",
                }}
              >
                How was your experience in using the Partner Portal
              </Typography>
            </Box>
            <Box component="div">
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  sx={{
                    "& .MuiRating-iconEmpty": {
                      color: "#FFB31A",
                    },
                  }}
                  name="hover-feedback"
                  value={starValue}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setStarValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                {starValue !== null && (
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : starValue]}
                  </Box>
                )}
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "25px",
              display: "flexwrap",
            }}
          >
            <Typography
              component="h3"
              sx={{
                color: "#222448",
                fontSize: "18px",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "Normal",
                marginBottom: "3px",
                marginLeft: "8px",
              }}
            >
              Which are the features that you liked Most?
            </Typography>

            <Typography
              component="p"
              sx={{
                color: "#707070",
                fontSize: "12px",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "Normal",
                marginBottom: "30px",
                marginLeft: "8px",
              }}
            >
              How was your experience in using the Partner Portal
            </Typography>

            <Box>
              <FormControl sx={{ m: 1 }} size="small" fullWidth>
                <InputLabel id="demo-select-small">Dashboard</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={formValue.dashboard}
                  name="dashboard"
                  fullWidth
                  label="Dashboard"
                  onChange={handleChange}
                  style={{ fontSize: "15px", color: "#424242" }}
                  sx={{
                    "& .MuiSelect-icon": {
                      color: "#3AA29F",
                    },
                    width: { xs: "100%", sm: "50%", md: "32%" },
                  }}
                >
                  <MenuItem
                    value={"dasboard1"}
                    style={{ fontSize: "15px", color: "#424242" }}
                  >
                    DashBoard 1
                  </MenuItem>
                  <MenuItem
                    value={"dashboard2"}
                    style={{ fontSize: "15px", color: "#424242" }}
                  >
                    DashBoard 2
                  </MenuItem>
                  <MenuItem
                    value={"dashboard3"}
                    style={{ fontSize: "15px", color: "#424242" }}
                  >
                    DashBoard 3
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <FormControl sx={{ m: 1 }} size="small" fullWidth>
                <InputLabel id="demo-select-small">Subscribe</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={formValue.subscribe}
                  label="Subscribe"
                  fullWidth
                  name="subscribe"
                  style={{ fontSize: "15px", color: "#424242" }}
                  onChange={handleChange}
                  sx={{
                    "& .MuiSelect-icon": {
                      color: "#3AA29F",
                    },
                    width: { xs: "100%", sm: "50%", md: "32%" },
                  }}
                >
                  <MenuItem
                    value={"subscribe1"}
                    style={{ fontSize: "15px", color: "#424242" }}
                  >
                    Autotrender Subscription
                  </MenuItem>
                  <MenuItem
                    value={"subscribe2"}
                    style={{ fontSize: "15px", color: "#424242" }}
                  >
                    Autotrender Subscription 2
                  </MenuItem>
                  <MenuItem
                    value={"subscribe3"}
                    style={{ fontSize: "15px", color: "#424242" }}
                  >
                    Autotrender Subscription 3
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <Typography
                component="p"
                sx={{
                  color: "#222448",
                  fontSize: "15px",
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: "Normal",
                  marginBottom: "10px",
                  marginLeft: "8px",
                }}
              >
                Please Drop your Comment
              </Typography>
            </Box>

            <Box>
              <TextField
                sx={{
                  marginLeft: "8px",
                  width: { xs: "100%", sm: "60%", md: "40%" },
                }}
                id="outlined-multiline-static"
                label="Start typing....."
                multiline
                value={formValue.featuretext}
                rows={4}
                variant="outlined"
                name="featuretext"
                onChange={handleChange}
              />
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "25px",
            }}
          >
            <Typography
              component="h3"
              sx={{
                color: "#222448",
                fontSize: "18px",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "Normal",
                marginBottom: "3px",
                marginLeft: "8px",
              }}
            >
              What features would you suggest need to be Changed or Improved?
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#707070",
                fontSize: "12px",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "Normal",
                marginBottom: "30px",
                marginLeft: "8px",
              }}
            >
              How was your experience in using the Partner Portal
            </Typography>

            <Box>
              <FormControl sx={{ mb: 1 }} size="small" fullWidth>
                <InputLabel id="demo-select-small">Sales</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={formValue.sales}
                  label="Sales"
                  name="sales"
                  fullWidth
                  onChange={handleChange}
                  style={{ fontSize: "15px", color: "#424242" }}
                  sx={{
                    "& .MuiSelect-icon": {
                      color: "#3AA29F",
                    },
                    width: { xs: "100%", sm: "50%", md: "32%" },
                    marginLeft: "8px",
                  }}
                >
                  <MenuItem
                    value={"sales1"}
                    style={{ fontSize: "15px", color: "#424242" }}
                  >
                    Sale 1
                  </MenuItem>
                  <MenuItem
                    value={"sales2"}
                    style={{ fontSize: "15px", color: "#424242" }}
                  >
                    Sale 2
                  </MenuItem>
                  <MenuItem
                    value={"sales3"}
                    style={{ fontSize: "15px", color: "#424242" }}
                  >
                    Sale 3
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl sx={{ m: 1 }} size="small" fullWidth>
                <InputLabel id="demo-select-small">Leads</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  fullWidth
                  value={formValue.leads}
                  label="Leads"
                  name="leads"
                  onChange={handleChange}
                  sx={{
                    "& .MuiSelect-icon": {
                      color: "#3AA29F",
                    },
                    width: { xs: "100%", sm: "50%", md: "32%" },
                  }}
                >
                  <MenuItem
                    value={"leads1"}
                    style={{ fontSize: "15px", color: "#424242" }}
                  >
                    Lead 1
                  </MenuItem>
                  <MenuItem
                    value={"leads2"}
                    style={{ fontSize: "15px", color: "#424242" }}
                  >
                    Lead 2
                  </MenuItem>
                  <MenuItem
                    value={"leads3"}
                    style={{ fontSize: "15px", color: "#424242" }}
                  >
                    Lead 3
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography
                component="p"
                sx={{
                  color: "#222448",
                  fontSize: "15px",
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: "Normal",
                  marginBottom: "10px",
                  marginLeft: "8px",
                }}
              >
                Please Drop your Comment
              </Typography>
            </Box>

            <TextField
              sx={{ width: { xs: "100%", sm: "60%", md: "40%" } }}
              fullWidth
              id="outlined-multiline-static"
              label="Start typing....."
              value={formValue.salestext}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined"
              name="salestext"
            />
          </Box>
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "25px",
            }}
          >
            <Typography
              component="h3"
              sx={{
                color: "#222448",
                fontSize: "18px",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "Normal",
                marginBottom: "3px",
                marginLeft: "8px",
              }}
            >
              Please suggest any feature/option you want us to add for even
              better experience.
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#707070",
                fontSize: "12px",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "Normal",
                marginBottom: "30px",
                marginLeft: "8px",
              }}
            >
              How was your experience in using the Partner Portal
            </Typography>
            <Box>
              <TextField
                sx={{
                  marginLeft: "8px",
                  marginBottom: { xs: "10px", sm: "0px", md: "0px" },
                  width: {
                    xs: "100%",
                    sm: "60%",
                    md: "40%",
                    marginLeft: "8px",
                  },
                }}
                id="outlined-multiline-static"
                label="Start typing....."
                multiline
                rows={4}
                value={formValue.suggesttext}
                variant="outlined"
                name="suggesttext"
                onChange={handleChange}
              />

              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#3AA29F",
                  color: "#FFFFFF",
                  width: "200px",
                  padding: "10px 15px",
                  fontSize: "14px",
                  marginLeft: "10px",
                  height: "auto",
                  verticalAlign: "bottom",
                  "&:hover": {
                    backgroundColor: "#3AA29F",
                  },
                }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Feedback;
