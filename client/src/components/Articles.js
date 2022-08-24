import { React } from "react";

function Articles({ articleArr }) {
  
  return <div>
    <h1 className="mt-10 text-center text-xl font-semibold">Worldwide Cannabis News-feed</h1>
    {articleArr.map((a, index) => {
      return <div key={index} className=" mt-8 px-10 max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-2xl">
        <a href={a.url}>
       <h1 className="text-center" ><strong>{a.title}</strong></h1>
       <img src={a.urlToImage} />
        <p>{a.author? a.author:null}</p>
        <p>Published at: {a.publishedAt}</p>
        <p className="mt-4">{a.description}</p>
        
      </a>
      </div>
    })
    }
    </div>;
}

export default Articles;
