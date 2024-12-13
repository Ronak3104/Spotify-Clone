import TextInput from "../components/shared/TextInput";
import { useState } from "react";
import { makeAuthenticateedPOSTRequest } from "../utils/serverHelpers";

const CreatePlaylistModal = ({closeModal}) => {
    const [playlistName, setPlaylistName] = useState("");
    const [playlistThumbnail, setPlaylistThumbnail] = useState("");

    const createPlaylist = async () => {
        const response = await makeAuthenticateedPOSTRequest(
            "/playlist/create", 
            {name: playlistName, thumbNail: playlistThumbnail, songs: []}
        );
        if(response._id){
            closeModal();
        }
    };

    return(
        <div 
            className="absolute bg-black w-screen h-screen bg-opacity-50 flex items-center justify-center" 
            onClick={closeModal}
        >
            <div 
                className="bg-search-bar w-1/3 rounded-md p-7" onClick={(e) => {e.stopPropagation()}}>
                <div className="font-semibold flex items-center justify-center text-white mb-5 text-lg">
                    Create Playlist
                </div>
                <div className="space-y-5">
                    <TextInput
                        label="Name"
                        labelClassName={"text-white font-light"}
                        placeholder="Playlist Name"
                        value={playlistName}
                        setValue={setPlaylistName}
                    />
                    <TextInput
                        label="Thumbnail"
                        labelClassName={"text-white font-light"}
                        placeholder="Thumbnail"
                        value={playlistThumbnail}
                        setValue={setPlaylistThumbnail}
                    />
                    <div className="flex items-center justify-center">
                        <div 
                            className="bg-white w-1/3 p-2 rounded-full font-semibold flex items-center justify-center cursor-pointer"
                            onClick={createPlaylist}
                        >
                            Create
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CreatePlaylistModal;