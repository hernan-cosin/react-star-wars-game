import { atom } from "recoil";

export const side = atom({
    key: "side",
    default: "",
});

export const userMove = atom({
  key: "userMove",
  default: ""
})

export const computerMove = atom({
  key: "computerMove",
  default: ""
})

export const noMoveSet = atom({
  key: "noMoveSet",
  default: false
})

export const currentGame = atom({
  key: "currentGame", 
  default: {
    computer: "",
    user: ""
  }
})

export const computerWins = atom({
  key: "computerWins",
  default: [0]
})

export const userWins = atom({
  key: "userWins",
  default: [0]
})

