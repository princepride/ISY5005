import React from "react";
import {
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormControlLabel,
    Checkbox,
    Radio,
    RadioGroup,
    TextareaAutosize,
    Grid,
    Typography,
  } from "@mui/material";

const CreateForm = ({ jsonData }) => {
  const { title, required, properties } = jsonData;

  const renderTextInput = (property) => {
    return (
      <Grid item xs={12} md={6} key={property.title}>
        <TextField
          id={property.type + property.title}
          label={property.title}
          defaultValue={property.default}
          required={required.includes(property.title)}
          fullWidth
          margin="normal"
        />
      </Grid>
    );
  };

  const renderDateInput = (property) => {
    return (
      <Grid item xs={12} md={6} key={property.title}>
        <TextField
          id={property.type + property.title}
          label={property.title}
          type="date"
          required={required.includes(property.title)}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="normal"
        />
      </Grid>
    );
  };

  const renderTimeInput = (property) => {
    return (
      <Grid item xs={12} md={6} key={property.title}>
        <TextField
          id={property.type + property.title}
          label={property.title}
          type="time"
          required={required.includes(property.title)}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="normal"
        />
      </Grid>
    );
  };

  const renderDateTimeInput = (property) => {
    return (
      <Grid item xs={12} md={6} key={property.title}>
        <TextField
          id={property.type + property.title}
          label={property.title}
          type="datetime-local"
          required={required.includes(property.title)}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="normal"
        />
      </Grid>
    );
  };

  const renderDropdownList = (property) => {
    return (
      <Grid item xs={12} md={6} key={property.title}>
        <FormControl
          required={required.includes(property.title)}
          fullWidth
          margin="normal"
        >
          <InputLabel id={property.type + property.title + "-label"}>
            {property.title}
          </InputLabel>
          <Select
            labelId={property.type + property.title + "-label"}
            id={property.type + property.title}
            defaultValue=""
          >
            {property.items.enumTitle.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    );
  };

  const renderTextArea = (property) => {
    return (
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key={property.title}>
        <TextareaAutosize
          id={property.type + property.title}
          aria-label="minimum height"
          minRows={5}
          placeholder={property.title}
          required={required.includes(property.title)}
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
    );
  };
        
        const renderRadioButtons = (property) => {
            return (
              <Grid item xs={12} key={property.title}>
                <Grid container spacing={2} alignItems="center" justify="flex-start">
                  <Grid item>
                    <InputLabel id={property.type + property.title + "-label"}>
                      {property.title}
                    </InputLabel>
                  </Grid>
                  <Grid item>
                    <FormControl
                      required={required.includes(property.title)}
                      fullWidth
                      margin="normal"
                    >
                      <RadioGroup row>
                    {property.items.enumTitle.map((item) => (
                      <FormControlLabel
                        key={item}
                        value={item}
                        control={<Radio style={{ display: 'inline-block', }} />}
                        label={item}
                      />
                    ))}
                  </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            );
          };

        const renderCheckBoxes = (property) => {
            return (
              <Grid item xs={12} key={property.title}>
                <Grid container spacing={2} alignItems="center" justify="flex-start">
                  <Grid item>
                    <InputLabel id={property.type + property.title + "-label"}>
                      {property.title}
                    </InputLabel>
                  </Grid>
                  <Grid item>
                    {property.items.enumTitle.map((item) => (
                      <FormControlLabel
                        key={item}
                        control={
                          <Checkbox value={item} name={property.name} />
                        }
                        label={item}
                      />
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            );
          };
        
        const renderButton = (property) => {
        return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key={property.title}>
        <Button
        variant="contained"
        id={property.type + property.title}
        required={required.includes(property.title)}
        margin="normal"
        >
        {property.title}
        </Button>
        </Grid>
        );
        };
        
        const renderFormElement = (property) => {
        switch (property.type) {
        case "textInput":
        return renderTextInput(property);
        case "date":
        return renderDateInput(property);
        case "time":
        return renderTimeInput(property);
        case "dateTime":
        return renderDateTimeInput(property);
        case "dropdownList":
        return renderDropdownList(property);
        case "textarea":
        return renderTextArea(property);
        case "radiButtons":
        return renderRadioButtons(property);
        case "checkBoxes":
        return renderCheckBoxes(property);
        case "button":
        return renderButton(property);
        default:
        return null;
        }
        };
        
        return (
        <form>
        <Typography variant="h2">{title}</Typography>
        <Grid container spacing={2}>
        {Object.values(properties).map((property) => (
        renderFormElement(property)))}
        </Grid>
      </form>
      );
};

export default CreateForm;