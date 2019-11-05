import React from "react";

const GlobalContext = React.createContext({
  input: "",
  values: [],
  error: false,
  handleSubmit: () => {},
});
export default GlobalContext;
