import landing from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
 const navigate = useNavigate();
 
 const handleSearchSubmit = (searchFormValues: SearchForm) => {
  navigate({
    pathname: `/search/${searchFormValues.searchQuery}`
  });
 };
 return(
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 object-cover">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
        Fill your belly today
        </h1>
        <span className="text-xl">Find a diverse selection of food!</span>
        <SearchBar placeHolder="Search by City or Town" onSubmit={handleSearchSubmit} />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landing} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="font-bold text-3xl tracking-tighter">
                Order takeaway even faster!
            </span>
            <span>
            Download the PlumpBelly App for faster ordering and personalised recommendations.
            </span>
             <img src={appDownloadImage} />
        </div>
      </div>
    </div>
 );
};

export default HomePage;