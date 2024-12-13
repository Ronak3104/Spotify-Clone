import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { useState } from "react";
import { makeAuthenticateedPOSTRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";

const UploadSong = () => {
  const [name, setName] = useState("");
  const [thumbNail, setThumbnail] = useState("");
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const navigate = useNavigate();

  const submitSong = async () => {
    const data = { name, thumbNail, track: playlistUrl };
    const response = await makeAuthenticateedPOSTRequest("/song/create", data);
    if (response.err) {
      alert("Could not create song");
      return;
    }
    alert("Success");
    navigate("/home");
  };

  return (
    <LoggedInContainer>
      <div className="text-2xl font-semibold mb-5 text-white mt-8">
        Upload your music
      </div>
      <div className="w-2/3 flex space-x-3">
        <div className="w-1/2">
          <TextInput
            label="Name"
            labelClassName={"text-white"}
            placeholder="Name"
            value={name}
            setValue={setName}
          />
        </div>
        <div className="w-1/2">
          <TextInput
            label="Thumbnail"
            labelClassName={"text-white"}
            placeholder="Thumbnail"
            value={thumbNail}
            setValue={setThumbnail}
          />
        </div>
      </div>
      <div className="py-5">
        {uploadedFileName ? (
          <div className="bg-green-400 rounded-full p-3 w-1/3 font-medium">
            {uploadedFileName.substring(0, 35)}...
          </div>
        ) : (
          <CloudinaryUpload
            setUrl={setPlaylistUrl}
            setName={setUploadedFileName}
          />
        )}
      </div>
      <div
        className="bg-button-green w-40 flex items-center justify-center p-4 rounded-full font-semibold cursor-pointer"
        onClick={submitSong}
      >
        Submit Song
      </div>
    </LoggedInContainer>
  );
};

export default UploadSong;
