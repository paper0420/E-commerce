import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const SearchBox = ({ children }) => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    console.log("Initail: " + keyword);
  }, [keyword]);

  const onInputChange = (searchvalue) => {
    setKeyword(searchvalue);
    console.log(searchvalue);
  };

  const exposed = {
    keyword,
    onInputChange,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export default SearchBox;
