import React from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./QueryClient";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
  React.useLayoutEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
