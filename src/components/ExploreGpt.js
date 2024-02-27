import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const ExploreGpt = () => {
    return (
    <div>
     <div className="absolute -z-10">
        <img
          src={BG_URL}
          alt="logo"
        />
      </div>
    <GptSearchBar/>
     <GptMovieSuggestions/>
</div>
    )
};

export default ExploreGpt;