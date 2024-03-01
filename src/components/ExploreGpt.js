import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const ExploreGpt = () => {
    return (
      <>
       <div className="fixed -z-10">
        <img src={BG_URL} alt="logo"/>
      </div>
    <div>
    <GptSearchBar/>
     <GptMovieSuggestions/>
</div>
</>
    )
};

export default ExploreGpt;