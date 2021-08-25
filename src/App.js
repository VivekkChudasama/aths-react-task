import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as API from "./data/data.json";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  {
    Name: "Martine of Martine's Table",
    City: "Amsterdam",
    "Cuisine Style": "['French', 'Dutch', 'European']",
    Ranking: 1,
    Rating: 5,
    "Number of Reviews": 136,
  },
  {
    Name: "De Silveren Spiegel",
    City: "Amsterdam",
    "Cuisine Style":
      "['Dutch', 'European', 'Vegetarian Friendly', 'Gluten Free Options']",
    Ranking: 2,
    Rating: 4,
    "Number of Reviews": 812,
  },
  {
    Name: "La Rive",
    City: "Amsterdam",
    "Cuisine Style":
      "['Mediterranean', 'French', 'International', 'European', 'Vegetarian Friendly', 'Vegan Options']",
    Ranking: 3,
    Rating: 4,
    "Number of Reviews": 567,
  },
  {
    Name: "Vinkeles",
    City: "Amsterdam",
    "Cuisine Style":
      "['French', 'European', 'International', 'Contemporary', 'Vegetarian Friendly', 'Vegan Options', 'Gluten Free Options']",
    Ranking: 4,
    Rating: 3,
    "Number of Reviews": 564,
  },
  {
    Name: "Librije's Zusje Amsterdam",
    City: "Amsterdam",
    "Cuisine Style":
      "['Dutch', 'European', 'International', 'Vegetarian Friendly', 'Vegan Options', 'Gluten Free Options']",
    Ranking: 5,
    Rating: 1,
    "Number of Reviews": 316,
  },
  {
    Name: "Ciel Bleu Restaurant",
    City: "Amsterdam",
    "Cuisine Style":
      "['Contemporary', 'International', 'Vegetarian Friendly', 'Vegan Options', 'Gluten Free Options']",
    Ranking: 6,
    Rating: 2,
    "Number of Reviews": 745,
  },
  {
    Name: "Zaza's",
    City: "Amsterdam",
    "Cuisine Style":
      "['French', 'International', 'Mediterranean', 'European', 'Vegetarian Friendly', 'Vegan Options', 'Gluten Free Options']",
    Ranking: 7,
    Rating: 4,
    "Number of Reviews": 1455,
  },
  {
    Name: "Blue Pepper Restaurant And Candlelight Cruises",
    City: "Amsterdam",
    "Cuisine Style":
      "['Asian', 'Indonesian', 'Vegetarian Friendly', 'Vegan Options', 'Gluten Free Options']",
    Ranking: 8,
    Rating: 3,
    "Number of Reviews": 675,
  },
  {
    Name: "Teppanyaki Restaurant Sazanka",
    City: "Amsterdam",
    "Cuisine Style":
      "['Japanese', 'Asian', 'Vegetarian Friendly', 'Vegan Options', 'Gluten Free Options']",
    Ranking: 9,
    Rating: 2,
    "Number of Reviews": 923,
  },
  {
    Name: "Rob Wigboldus Vishandel",
    City: "Amsterdam",
    "Cuisine Style": "['Dutch', 'Seafood', 'Fast Food']",
    Ranking: 10,
    Rating: 5,
    "Number of Reviews": 450,
  },
  {
    Name: "The Happy Bull",
    City: "Amsterdam",
    "Cuisine Style":
      "['American', 'Bar', 'European', 'Vegetarian Friendly', 'Gluten Free Options']",
    Ranking: 11,
    Rating: 1,
    "Number of Reviews": 295,
  },
  {
    Name: "Gartine",
    City: "Amsterdam",
    "Cuisine Style":
      "['French', 'Dutch', 'International', 'European', 'Vegetarian Friendly', 'Vegan Options', 'Gluten Free Options']",
    Ranking: 12,
    Rating: 4,
    "Number of Reviews": 967,
  },
  {
    Name: "Restaurant Adam",
    City: "Amsterdam",
    "Cuisine Style":
      "['French', 'European', 'Central European', 'Vegetarian Friendly', 'Vegan Options', 'Gluten Free Options']",
    Ranking: 13,
    Rating: 3,
    "Number of Reviews": 368,
  },
  {
    Name: "Biercafe Gollem",
    City: "Amsterdam",
    "Cuisine Style": "['Bar', 'Pub']",
    Ranking: 14,
    Rating: 4,
    "Number of Reviews": 586,
  },
  {
    Name: "Restaurant Daalder",
    City: "Amsterdam",
    "Cuisine Style":
      "['French', 'Dutch', 'International', 'European', 'Vegetarian Friendly', 'Vegan Options', 'Gluten Free Options']",
    Ranking: 15,
    Rating: 5,
    "Number of Reviews": 1246,
  },
  {
    Name: "Greenwoods Keizersgracht",
    City: "Amsterdam",
    "Cuisine Style":
      "['Dutch', 'Cafe', 'European', 'British', 'Vegetarian Friendly', 'Vegan Options', 'Gluten Free Options']",
    Ranking: 16,
    Rating: 5,
    "Number of Reviews": 1391,
  },
  {
    Name: "Omelegg - City Centre",
    City: "Amsterdam",
    "Cuisine Style":
      "['Dutch', 'European', 'Healthy', 'International', 'Vegetarian Friendly', 'Gluten Free Options']",
    Ranking: 17,
    Rating: 5,
    "Number of Reviews": 1633,
  },
  {
    Name: "Brasserie Ambassade",
    City: "Amsterdam",
    "Cuisine Style":
      "['French', 'Bar', 'International', 'European', 'Seafood', 'Vegetarian Friendly', 'Gluten Free Options']",
    Ranking: 18,
    Rating: 4,
    "Number of Reviews": 958,
  },
  {
    Name: "Sherpa Restaurant",
    City: "Amsterdam",
    "Cuisine Style":
      "['Indian', 'Tibetan', 'Nepali', 'Vegetarian Friendly', 'Vegan Options', 'Gluten Free Options']",
    Ranking: 19,
    Rating: 3,
    "Number of Reviews": 426,
  },
  {
    Name: "La Maschera Lillotatini",
    City: "Amsterdam",
    "Cuisine Style":
      "['Italian', 'Mediterranean', 'European', 'Vegetarian Friendly']",
    Ranking: 20,
    Rating: 3,
    "Number of Reviews": 421,
  },
  {
    Name: "Senses Restaurant",
    City: "Amsterdam",
    "Cuisine Style": "['International', 'European']",
    Ranking: 21,
    Rating: 5,
    "Number of Reviews": 1380,
  },
];
function App() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Ranking</TableCell>
            <TableCell align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.City}</TableCell>
              <TableCell align="right">{row.Ranking}</TableCell>
              <TableCell align="right">{row.Rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
