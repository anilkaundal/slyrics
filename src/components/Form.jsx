import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Card from "./Card";
import axios from "axios";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Trocchi", "serif"].join(","),
  },
});

export default function Form() {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [lyric, setLyric] = useState("");

  function handleClick() {
    axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`).then((res) => {
      setLyric(res.data.lyrics);
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <form autoComplete="off">
        <TextField
          variant="outlined"
          placeholder="Artist"
          value={artist}
          onChange={(event) => {
            setArtist(event.target.value);
          }}
        />
        <br />
        <TextField
          variant="outlined"
          placeholder="Song"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <br />
        <Button variant="contained" onClick={handleClick}>
          Search
        </Button>
      </form>
      {lyric ? <Card name={title.toUpperCase()} lyric={lyric} /> : null}
    </ThemeProvider>
  );
}
