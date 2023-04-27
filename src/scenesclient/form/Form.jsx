import { useState } from "react";

import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
//
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form1 = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Create Contract" subtitle="Create a New Form" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Counter Party Name "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cpname}
                name="cpname"
                error={!!touched.cpname && !!errors.cpname}
                helperText={touched.cpname && errors.cpname}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Representative"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.representative}
                name="representative"
                error={!!touched.representative && !!errors.representative}
                helperText={touched.representative && errors.representative}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Counter party company"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cpcompany}
                name="cpcompany"
                error={!!touched.cpcompany && !!errors.cpcompany}
                helperText={touched.cpcompany && errors.cpcompany}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Position"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.position}
                name="position"
                error={!!touched.position && !!errors.position}
                helperText={touched.position && errors.position}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Counter Party Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cpaddress}
                name="cpaddress"
                error={!!touched.cpaddress && !!errors.cpaddress}
                helperText={touched.cpaddress && errors.cpaddress}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Counter Party Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cpemail}
                name="cpemail"
                error={!!touched.cpemail && !!errors.cpemail}
                helperText={touched.cpemail && errors.cpemail}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Counter Party Contact"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cpcontact}
                name="cpcontact"
                error={!!touched.cpcontact && !!errors.cpcontact}
                helperText={touched.cpcontact && errors.cpcontact}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Counter Party Signer Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cpsign}
                name="cpsign"
                error={!!touched.cpsign && !!errors.cpsign}
                helperText={touched.cpsign && errors.cpsign}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Governing Law"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.governlaw}
                name="governlaw"
                error={!!touched.governlaw && !!errors.governlaw}
                helperText={touched.governlaw && errors.governlaw}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Date Of Termination"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dot}
                name="dot"
                error={!!touched.dot && !!errors.dot}
                helperText={touched.dot && errors.dot}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Agreement Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.agdate}
                name="agdate"
                error={!!touched.agdate && !!errors.agdate}
                helperText={touched.agdate && errors.agdate}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Breach Obligation"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.breach}
                name="breach"
                error={!!touched.breach && !!errors.breach}
                helperText={touched.breach && errors.breach}
                sx={{ gridColumn: "span 4" }}
              />
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              /> */}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  cpname: yup.string().required("required"),
  representative: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  cpname: "",
  representative: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const Form = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Form1 />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default Form;
