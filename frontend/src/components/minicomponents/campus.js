/* eslint-disable no-use-before-define */
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import React from "react";

export default function Highlights(props) {
  return (
    <Autocomplete
      id="highlights-demo"
      style={{ width: "95%" }}
      options={block}
      getOptionLabel={(option) => option.title}
      onChange={props.onChange}
      error={props.error}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select Campus location"
          variant="outlined"
          margin="normal"
          error={props.error}
          helperText={props.helperText}
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

const block = [
  {
    title: "Block A",
    room: "",
  },
  {
    title: "Block B",
    room: "",
  },
  {
    title: "Block C",
    room: "",
  },
  {
    title: "Block D",
    room: "",
  },
  {
    title: "Block E",
    room: "",
  },
  {
    title: "Shed",
    room: "",
  },
  {
    title: "Fores",
    room: "",
  },
];
