import { useContext } from "react";
import { Context } from "../context/SearchBox";

const useSearchBox = () => {
  const context = useContext(Context);
  return context;
};

export default useSearchBox;
