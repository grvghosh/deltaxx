import {
  Typography,
  Box,
  makeStyles,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import { useState } from "react";
const useStyles = makeStyles({
  songListColor: {
    backgroundColor: "#fff",
    fontWeight: "bold",
    color: "#000000",
    margin: 15,
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  tableHeadCell: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
const HomeScreen = () => {
  const classes = useStyles();
  const [songs, setSongs] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80",
      song: "Astronomy dopamine",
      dateOfRelease: "10 sept 1975",
      artists: "Pink Floyd",
      rate: "11",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vbCUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80",
      song: "Comfortable Numb",
      dateOfRelease: "10 sept 1975",
      artists: "Pink Floyd",
      rate: "12",
    },
    {
      id: 3,
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/12/16/633584-pexels-photo-368893.jpg",
      song: "keep talking",
      dateOfRelease: "10 sept 1975",
      artists: "Pink Floyd",
      rate: "14",
    },
  ]);
  return (
    <>
      <Box p={2} className={classes.songListColor}>
        <Typography variant="h4">Top 10 Songs</Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            alert("clicked");
          }}
        >
          Add Song
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "black" }}>
              <TableCell align="center" className={classes.tableHeadCell}>
                No
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                ArtWork
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Song
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Date of Release
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Artist
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Rate
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songs.map((song, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">
                    <div>
                      <img
                        src={song.image}
                        style={{ height: 120, width: 120 }}
                      />
                    </div>
                  </TableCell>
                  <TableCell align="center">{song.song}</TableCell>
                  <TableCell align="center">{song.dateOfRelease}</TableCell>
                  <TableCell align="center">{song.artists}</TableCell>
                  <TableCell align="center">{song.rate}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2} className={classes.songListColor}>
        <Typography variant="h4">Top 10 Artist</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "black" }}>
              <TableCell align="center" className={classes.tableHeadCell}>
                No
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Artist
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Date Of Birth
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Songs
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songs.map((song, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{song.artists}</TableCell>
                  <TableCell align="center">{song.dateOfRelease}</TableCell>
                  <TableCell align="center">{song.song}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default HomeScreen;
