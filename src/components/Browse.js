import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import ExploreGpt from "./ExploreGpt";
const Browse = () => {

    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
   useNowPlayingMovies();
   usePopularMovies();
   useHorrorMovies();
   useTrendingMovies();
   useUpcomingMovies();

    return ( 
    <div>
    <Header/>
    {showGptSearch ? (
     <ExploreGpt/>
    ):(
    <>
    <MainContainer/>
      <SecondaryContainer/>
    </>
    )}
    </div>
    );
};
export default Browse;

