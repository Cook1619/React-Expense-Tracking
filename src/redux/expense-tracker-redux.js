import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "123asd",
      description: "Rent",
      note: "This is the January Rent",
      amount: 80000,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
