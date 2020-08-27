import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExpenseDashboard from "../components/expense-dashboard/expense-dashboard.component";
import AddExpense from "../components/add-expense/add-expense.component";
import EditExpense from "../components/edit-expense/edit-expense.component";
import HelpPage from "../components/pages/help.component";
import NotFound from "../components/pages/not-found.component";
import Header from "../components/header/header.component";

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboard} />
        <Route path="/add" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
