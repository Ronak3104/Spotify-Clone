import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";
import { makeAuthenticateedGETRequest } from "../utils/serverHelpers";
import SingleSongCard from "../components/shared/SingleSongCard";

const SinglePlayListView = () => {
  const [playlistDetails, setPlaylistDetails] = useState({});
  const { playlistId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticateedGETRequest(
        "/playlist/get/playlist/" + playlistId
      );
      setPlaylistDetails(response);
    };
    getData();
  }, []);
  return (
    <LoggedInContainer currentActiveScreen={"yourLibrary"}>
      {playlistDetails._id && (
        <div>
          <div className="text-white text-xl pt-8 font-semibold">
            {playlistDetails.name}
          </div>
          <div className="pt-10 space-y-3">
            {playlistDetails.songs.map((item) => {
              return (
                <SingleSongCard
                  info={item}
                  key={JSON.stringify(item)}
                  playSound={() => {}}
                />
              );
            })}
          </div>
        </div>
      )}
    </LoggedInContainer>
  );
};

export default SinglePlayListView;
