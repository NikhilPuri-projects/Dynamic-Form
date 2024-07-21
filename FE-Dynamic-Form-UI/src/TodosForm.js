import { useEffect, useState } from "react";
import Textfield from "./Components/Textfield.input";
import Autocomplete from "./Components/Autocomplete.input";
import RowContainer from "./Components/Rowcontainer";
import ColumnContainer from "./Components/ColumnContainer";
import Title from "./Components/Title";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Container, Box, TextField, Checkbox } from '@mui/material';
import formImage from './form-image.png'


function TodoForm() {
  const [payload, setPayload] = useState({
    userId: null,
  });
  const [formRequiredData, setFormRequiredData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/getUsers")
      .then((response) => response.json())
      .then((data) => {
        console.log(data?.data, "data");
        return setFormRequiredData(data?.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/postUsers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Your form has been submitted !")
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  function renderTodoInput(todo, index) {
    switch (todo.column_type) {
      case "text":
      case "password":
      case "email":
      case "number":
        return (
          <div className="form-group" key={index}>
            <ColumnContainer sx={{ marginBottom: "20px" }}>
              <Textfield
                type={
                  todo.column_type === "text"
                    ? "text"
                    : todo.column_type === "password"
                      ? "password"
                      : todo.column_type
                }
                lightBorder
                required={todo.column_mandatory}
                fullwidth
                label={todo.column_name}
                onChange={(event) => {
                  setPayload({
                    ...payload,
                    [todo.column_name]: event.target.value,
                  });
                }}
              />
            </ColumnContainer>
          </div>
        );
      case "checkbox":
        return (
          <div sx={{ marginBottom: "10px" }}>
            {todo?.column_options &&
              Array.isArray(todo?.column_options) &&
              todo?.column_options.length > 0 &&
              todo?.column_options.map((item, i) => (
                <RowContainer noJustify minGap key={i} row>
                  <Checkbox
                    row
                    color="grey"
                    checked={payload[todo.column_name].some(
                      (items) => items === item?.value
                    )}
                    onClick={() => {
                      const updatedItems = payload[todo.column_name].includes(
                        item?.value
                      )
                        ? payload[todo.column_name].filter(
                          (existingItem) => existingItem !== item?.value
                        )
                        : [...payload[todo.column_name], item?.value];

                      setPayload({
                        ...payload,
                        [todo.column_name]: updatedItems,
                      });
                    }}
                  />
                  <Title type="h4">{item?.label}</Title>
                </RowContainer>
              ))}
          </div>
        );
      case "select":
        return (
          <Autocomplete
            lightBorder
            width="100%"
            renderInput={(params) => (
              <Textfield
                fullWidth
                {...params}
                label={todo.column_name}
                required={todo.column_mandatory}
              />
            )}
            sx={{ marginBottom: "20px" }}
            options={todo?.column_options || []}
            onChange={(e, val) => {
              setPayload({
                ...payload,
                [todo.column_name]: val?.value,
              });
            }}
          />
        );
      case "radio":
        return (
          <RadioGroup
            row
            sx={{ marginBottom: "10px" }}
            value={payload[todo.column_name]}
            onChange={(event) => {
              setPayload({
                ...payload,
                [todo.column_name]: event.target.value,
              });
            }}
          >
            {todo?.column_options &&
              Array.isArray(todo?.column_options) &&
              todo?.column_options.length > 0 &&
              todo?.column_options.map((item, i) => (
                <RowContainer noJustify minGap key={i} row>
                  <FormControlLabel
                    control={<Radio value={item?.value} />}
                    label={item?.label}
                  />
                </RowContainer>
              ))}
          </RadioGroup>
        );
      case "date":
        return (
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{
                  textAlign: "left", width: '100%', '& .MuiOutlinedInput-root': {
                    borderRadius: '45px',
                    height: '40px'
                  },
                  '& .MuiInputBase-root': {
                    borderRadius: '45px',
                    height: '40px'
                  },
                }}
                label={todo.column_name}
                value={
                  payload[todo.column_name]
                    ? dayjs(payload[todo.column_name])
                    : null
                }
                onChange={(newValue) => {
                  setPayload({
                    ...payload,
                    [todo.column_name]: newValue
                      ? newValue.toISOString()
                      : null,
                  });
                }}
                renderInput={(params) => <TextField
                  {...params}

                />}
              />
            </LocalizationProvider>
          </div>
        );
      case "time":
        return (
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopTimePicker
                sx={{
                  width: '100%', '& .MuiOutlinedInput-root': {
                    borderRadius: '45px',
                    height: '40px',
                    '& input': {
                      height: '20px',
                      padding: '0 14px',
                    },
                  },
                  '& .MuiInputBase-root': {
                    borderRadius: '45px',
                    height: '40px'

                  },
                }}
                label={todo.column_name}
                value={
                  payload[todo.column_name]
                    ? dayjs(payload[todo.column_name])
                    : null
                }
                onChange={(newValue) => {
                  setPayload({
                    ...payload,
                    [todo.column_name]: newValue
                      ? newValue.toISOString()
                      : null,
                  });
                }}
                renderInput={(params) => <Textfield {...params} />}
              />
            </LocalizationProvider>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <Container width="1700px" style={{ display: 'flex', height: '95vh', maxWidth: "1400px", backgroundColor: 'white', marginTop: '20px' }}>
      <Box
        component="form"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '2rem',
          backgroundColor: '#efe8e8',
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          margin: '0.5rem 0.5rem 0.5rem 0.5rem',
          maxHeight: '100%',
          overflowY: 'auto'
        }}
        noValidate
      >
        <style>{`
        .todo-form-container{
            overflow-y: auto;
    padding-top: 10px;
        }
                .todo-button {
                    padding: 10px 20px;
                    margin-top: 15px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                .todo-button:hover {
                    background-color: #0056b3;
                }
            `}</style>
        <div className="todo-form-container">
          <h1 style={{ paddingBottom:'8px', borderBottom: "2px solid grey", color: 'white', textShadow: '2px 2px 4px #000000' }}>Dyanamic Form</h1>
          <Autocomplete
            sx={{ marginBottom: "10px" }}
            lightBorder
            disableClearable
            width="100%"
            value={
              formRequiredData &&
                Array.isArray(formRequiredData) &&
                formRequiredData.length > 0 &&
                payload?.userId
                ? formRequiredData.find((item) => item.userId === payload?.userId)
                  ?.username
                : ""
            }
            renderInput={(params) => (
              <Textfield fullWidth {...params} label="Select User" required />
            )}
            options={
              formRequiredData &&
                Array.isArray(formRequiredData) &&
                formRequiredData.length > 0
                ? formRequiredData.map((item) => ({
                  label: item?.username,
                  value: item?.userId,
                }))
                : []
            }
            onChange={(e, val) => {
              if (!val?.value) {
                setPayload({ userId: null });
              }
              const data = formRequiredData.find(
                (item) => item.userId === val?.value
              );
              const otherPayload = data?.formData?.data.reduce((acc, curr) => {
                if (curr.post_api_key) {
                  acc = {
                    ...acc,
                    [curr.post_api_key]:
                      curr.column_type === "checkbox" ? [] : "",
                  };
                }
                return acc;
              }, {});
              setPayload({ userId: val.value, ...otherPayload });
            }}
          />
          {payload?.userId != null && payload?.userId !== undefined ? (
            <form onSubmit={handleSubmit}>
              {formRequiredData
                .find((item) => item.userId === payload?.userId)
                .formData.data.map((todo, index) => (
                  <div key={index} style={{ marginBottom: '20px' }}>
                    <Title bold sx={{ marginBottom: "10px", marginLeft: "10px" }}>
                      {todo?.column_heading}
                    </Title>
                    {renderTodoInput(todo, index)}
                  </div>
                ))}
              <button type="submit" className="todo-button">
                Submit
              </button>
            </form>
          ) : null}
        </div>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0.5rem 0.5rem 0.5rem 0.5rem',
          borderRadius: '8px',
        }}
      >
        <img
          src={formImage}
          alt="Sample"
          style={{ maxWidth: '100%', height: '80%', borderRadius: '8px' }}
        />
      </Box>
    </Container>
  );
}

export default TodoForm;
