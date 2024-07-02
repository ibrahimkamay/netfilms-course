import React from "react";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import { FeaturedMovie } from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

function HomeContainer({selectedCategory}) {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      {!!selectedCategory.movies.length && (
        <MoviesSection
          title={Genres.genres.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}
      
      <MoviesSection
        title="Popular Movies"
        movies={Movies.results.slice(1, 7)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={Movies.results.slice(7, 13)}
      />
    </div>
  );
}

export default HomeContainer;
