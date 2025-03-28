import landing from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"
const HomePage = () => {
 return(
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 object-cover">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
        Fill your belly today today
        </h1>
        <span className="text-xl">Find a diverse selection of food!</span>
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