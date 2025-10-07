import React from "react";
import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
  <Card sx={{ maxWidth: 500, margin: "auto", padding: 2, textAlign: "center" }} id="quote-box">
    <CardContent>
      {selectedQuote ? (
        <>
          <Typography id="text" variant="h6" gutterBottom>
            "{selectedQuote.quote}"
          </Typography>
          <Typography id="author" variant="subtitle1">
            — {selectedQuote.author}
          </Typography>
        </>
      ) : (
        <Typography variant="body1">Loading...</Typography>
      )}
    </CardContent>

    <CardActions sx={{ justifyContent: "center" }}>
      <Button
        id="new-quote"
        size="small"
        variant="contained"
        color="primary"
        onClick={assignNewQuoteIndex}
      >
        Next Quote
      </Button>

      {selectedQuote && (
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text="${selectedQuote.quote}" — ${selectedQuote.author}&hashtags=quote`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
      )}
    </CardActions>
  </Card>
);

export default QuoteMachine;
