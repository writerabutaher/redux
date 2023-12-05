"use client";

import { Provider } from "react-redux";
import { store } from "@/components/redux/store";

const AllProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AllProvider;
