import React from "react";
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div className="gap-8 bg-gradient-to-r flex-col from-pink-300 via-purple-300 to-indigo-400 text-center h-screen w-screen flex items-center justify-center ">
        <h1 className="font-semibold text-2xl">Welcome to MongoDb tutorial</h1>
        <Link to ={'/form'}><button className="w-full px-3 h-10 rounded-lg bg-red-300">Fill the form</button></Link>
        <Link to ={'/user'}><button className="w-full rounded-lg bg-blue-300 h-10 px-3">Check the users</button></Link>
    </div>
  );
};

export default Home;
