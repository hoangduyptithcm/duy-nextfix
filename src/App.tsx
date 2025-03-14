import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import MyListPage from "./pages/MyListPage";

function App() {
  return (
    <Suspense
      fallback={
        <p className="flex items-center justify-center h-screen bg-black text-white">
          Loading...
        </p>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="series" element={<SeriesPage />} />
            <Route path="movie/:id" element={<MovieDetailPage />} />
            <Route path="mylist" element={<MyListPage />} />
          </Route>
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
