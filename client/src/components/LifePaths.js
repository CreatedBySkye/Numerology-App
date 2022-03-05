import LifePath from "./LifePath";
import { useState, useEffect } from "react";
import axios from "axios";

const LifePaths = () => {
  const [lifePaths, setLifePaths] = useState([]);
  const [error, setError] = useState(undefined);



  useEffect(() => {
    const fetchLifePaths = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/numerology");
        setLifePaths(data);
        error && setError(undefined);
      } catch (err) {
        setError({
          status: err.response.status,
          errMsg: "Couldn't fetch life paths from db",
        });
      }
    };
    fetchLifePaths();
  }, [error]);

  if (lifePaths.length < 1) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Failed to fetch life paths</div>;
  }

let h1= document.getElementsByClassName("border-red-800 border-4 text-purple-800 absolute top-40 ml-80 left-96 w-1/4 overflow-y-auto h-2/4")
h1.className="opacity-0"
  return (
    <>
    <img src="https://i.ibb.co/kJ4Drst/pexels-pixabay-301673.jpg" width="60%" height="100%"alt="pexels-pixabay-301673" border="0" className="object-cover absolute right-0 dark:bg-coolGray-500 z-0"/>   
      <img src="https://i.ibb.co/4tfhN62/shutterstock-1787658104.jpg" height="100%" width="50%" alt="shutterstock-1787658104" border="0" className="h-full dark:bg-coolGray-500 pr-40 z-20"/>
      <div>
      <h1 style={{ color: "#fff" }}>Life Paths</h1>
      <div className="absolute top-40 z-50">
        {lifePaths.map((path, idx) => (
          <LifePath
            key={idx}
            pathNumber={path.pathNumber}
            title={path.title}
            description={path.description}
          />
        ))}
      </div>
      </div>
    </>
  );
};

export default LifePaths;
