import React from "react";
import { Component } from "react";
import Crossword from "react-crossword";
import { ThemeProvider } from "styled-components";

const data = {
  across: {
    1: {
      clue: "This makes you perfect (8)",
      answer: "Practice",
      row: 4,
      col: 3
    },
    2: {
      clue: "Indian woman with two Olympic medals (1,1,6)",
      answer: "PV Sindhu",
      row: 9,
      col: 13
    },
    3: {
      clue: "a, e, i, o and u are called? (6)",
      answer: "Vowels",
      row: 2,
      col: 3
    },
    4: {
      clue: "Iconic monument that is associated with Paris (6,5)",
      answer: "Eiffel Tower",
      row: 11,
      col: 3
    },
    5: {
      clue: "Francis Bacon said this is power (9)",
      answer: "Knowledge",
      row: 15,
      col: 2
    },
    6: {
      clue: "Snakes and lizards are collectively called? (8)",
      answer: "Reptiles",
      row: 7,
      col: 5
    },
    7: {
      clue: "Fish use gills but we use these (5)",
      answer: "Lungs",
      row: 9,
      col: 1
    },
    8: {
      clue: "Surname of Captain Cool who invented the helicopter shot (5)",
      answer: "Dhoni",
      row: 15,
      col: 13
    },
    9: {
      clue: "Watch out! This mountain-dwelling animal spits! (5)",
      answer: "Llama",
      row: 13,
      col: 10
    },
    10: {
      clue: "Olympian mom played by Priyanka Chopra on screen (4,3)",
      answer: "Mary Kom",
      row: 1,
      col: 10
    },
    11: {
      clue: "A measuring unit of digital information made of 8 bits (4)",
      answer: "Byte",
      row: 4,
      col: 17
    }
  },
  down: {
    1: {
      clue:
        "This slow arboreal animal is also one of the seven deadly sins (5)",
      answer: "Sloth",
      row: 1,
      col: 7
    },
    2: {
      clue:
        "It may have killed the cat but it's something every student should have (9)",
      answer: "Curiosity",
      row: 3,
      col: 9
    },
    3: {
      clue: "Geometric shapes found in Toblerone and also in Egypt! (7)",
      answer: "Pyramids",
      row: 9,
      col: 13
    },
    4: {
      clue: "This organ helps in digestion (9)",
      answer: "Intestine",
      row: 8,
      col: 3
    },
    5: {
      clue: "The M in the MCU franchise (6)",
      answer: "Marvel",
      row: 4,
      col: 1
    },
    6: {
      clue: "As stubborn as a ____.Which animal fits this simile? (4)",
      answer: "Mule",
      row: 1,
      col: 10
    },
    7: {
      clue: "A furry cow-like animal found in the Himalayas (3)",
      answer: "Yak",
      row: 1,
      col: 13
    },
    8: {
      clue: "Our very own wonder of the world (3,5)",
      answer: "Taj Mahal",
      row: 3,
      col: 19
    },
    9: {
      clue: "It is produced in the pancreas. Diabetics depend on it (7)",
      answer: "Insulin",
      row: 9,
      col: 16
    }
  }
};
const theme = {
  gridBackground: "rgb(255, 0, 0)"
};

export function Cross()  {
    console.log("cross")
    return (
      <div>
        <header className="App-header">
          <h2>MCQ 4-6</h2>
          <ThemeProvider theme={theme}>
            <Crossword data={data} />
          </ThemeProvider>
          ;
        </header>
      </div>
    );
}

