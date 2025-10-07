import React, { useState, useEffect } from "react";
import { random } from "lodash";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { Grid, styled } from "@mui/material";
import QuoteMachine from "./components/QuoteMachine";

// Define styles using MUI's styled API
const Container = styled(Grid)({
  alignItems: "center",
  display: "flex",
  height: "100vh",
});

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);

  // Fetch quotes on component mount
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch quotes");
        }
        const data = await response.json();
        setQuotes(data);
        setSelectedQuoteIndex(generateNewQuoteIndex(data));
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    fetchQuotes();
  }, []);

  // Generate a random quote index
  const generateNewQuoteIndex = (quotesArray) => {
    if (!quotesArray.length) return null;
    return random(0, quotesArray.length - 1);
  };

  // Assign a new random quote index
  const assignNewQuoteIndex = () => {
    setSelectedQuoteIndex(generateNewQuoteIndex(quotes));
  };

  // Get the currently selected quote
  const selectedQuote =
    quotes.length && Number.isInteger(selectedQuoteIndex)
      ? quotes[selectedQuoteIndex]
      : null;

  return (
    <Container container justifyContent="center" alignItems="center">
      <Grid xs={11} lg={8} item id="quote-box">
        <QuoteMachine
          selectedQuote={selectedQuote}
          assignNewQuoteIndex={assignNewQuoteIndex}
        />
      </Grid>
    </Container>
  );
};

export default App;