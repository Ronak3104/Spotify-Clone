import { useState, useEffect } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { makeAuthenticateedGETRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const [myPlaylists, setMyPlaylists] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticateedGETRequest("/playlist/get/me");
      setMyPlaylists(response.data);
    };
    getData();
  }, []);

  return (
    <LoggedInContainer currentActiveScreen={"yourLibrary"}>
      <div className="text-white text-xl pt-8 font-semibold">My Playlists</div>
      <div className="py-5 grid gap-5 grid-cols-5">
        {myPlaylists.map((item) => {
          return (
            <Card
              key={JSON.stringify(item)}
              title={item.name}
              description=""
              imageUrl={item.thumbNail}
              plyalistId={item._id}
            />
          );
        })}
      </div>
    </LoggedInContainer>
  );
};

const Card = ({ title, description, imageUrl, plyalistId }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-black bg-opacity-40 w-full p-4 rounded-lg cursor-pointer"
      onClick={() => {
        navigate("/playlist/" + plyalistId);
      }}
    >
      <div className="pb-4 pt-2">
        <img className="w-full rounded-md" src={imageUrl} alt="label" />
      </div>
      <div className="text-white font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};

export default Library;
