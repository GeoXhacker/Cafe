/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

export default function Highlights(props) {
  return (
    <Autocomplete
      id="highlights-demo"
      style={{ width: "95%" }}
      options={place}
      getOptionLabel={(option) => option.name}
      onChange={props.onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Where you at?"
          variant="outlined"
          margin="normal"
        />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.name, inputValue);
        const parts = parse(option.name, matches);

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

const place = [{ name: "Hostel" }, { name: "Campus" }];
