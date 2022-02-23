import React from "react";
import "./App.css";
import google_sign from "./google_sign.png";
import heroshot from "./heroshot.png";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div
      id="landing-main"
      className="container  mx-auto box-border overflow-x-hidden"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>excerpt</title>
      </Helmet>
      <div id="landing-header" className="flex p-4">
        <div
          to="/"
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-slate-500"
        >
          excerpt
        </div>
        <div className="flex flex-grow items-center content-center pr-2"></div>
        <div className="flex items-center ">login</div>
      </div>
      <div
        id="hero-section"
        className="flex flex-col items-center p-10 box-sizeing mb-4 border-b-0"
      >
        <div
          id="hero-header"
          className="text-5xl  text-center mb-1 text-black font-bold"
        >
          save all notes to one place
        </div>
        <div className="text-slate-400 p-2 pb-4">
          Organiz your notes and pictures in a way where people can find them
        </div>
        <button className="rounded-md mb-4 w-36 h-10 text-teal-50">
          <img src={google_sign} alt="google sign"></img>
        </button>
        <img className="pt-6" src={heroshot} alt="hero shot"></img>
      </div>
      <div id="features" className="flex justify-center mb-3">
        <div className="flex flex-col items-center pr-4 pb-1 pl-4 w-[368px] box-border">
          <div className="text-2xl font-bold pb-2"> For you</div>
          <div className="text-slate-400 text-md pl-4 pr-4">
            Organize your personal notes.Track your ideas and projects
          </div>
        </div>

        <div className="flex flex-col items-center pr-4 pb-1 pl-4 w-[368px] box-border border-l border-r border-slate-200">
          <div className="text-2xl font-bold pb-2"> For your team</div>
          <div className="text-slate-400 text-md pr-4 pl-4">
            Create a single source of truth for all project documentation, on
            all stages. Turn Google Drive into a hub for everything your team is
            working on
          </div>
        </div>

        <div className="flex flex-col items-center pr-4 pb-1 pl-4 w-[368px] box-border">
          <div className="text-2xl font-bold pb-2"> For your users</div>
          <div className="text-slate-400 text-md pr-4 pl-4">
            Knowledge bases for your Products,User Guides,FAQs
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
