/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

export default function Highlights() {
  return (
    <Autocomplete
      id="highlights-demo"
      style={{ width: "95%" }}
      options={hostel}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select Hostel"
          variant="outlined"
          margin="normal"
        />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.title, inputValue);
        const parts = parse(option.title, matches);

        return (
          <div>
            {parts.map((part, index) => (
              <span
                key={index}
                style={{ fontWeight: part.highlight ? 700 : 400 }}
              >
                {part.text}
              </span>
            ))}
          </div>
        );
      }}
    />
  );
}

const hostel = [
  {
    title: "Comfort",
    room: "",
  },
  {
    title: "Regina",
    room: "",
  },
  {
    title: "Green Cave",
    room: "",
  },
  {
    title: "Basma",
    room: "",
  },
  {
    title: "New Florida",
    room: "",
  },
];
