import { useState, useEffect} from "react";
import { makeAuthenticateedGETRequest } from "../utils/serverHelpers";

const AddToPlaylistModal = ({closeModal, addSongToPlaylist}) => {
    
    const [myPlaylists, setMyPlaylists] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticateedGETRequest(
                "/playlist/get/me"
            );
            setMyPlaylists(response.data);
        };
        getData();
    }, []);

    return(
        <div 
            className="absolute bg-black w-screen h-screen bg-opacity-50 flex items-center justify-center" 
            onClick={closeModal}
        >
            <div 
                className="bg-search-bar w-1/3 rounded-md p-7" onClick={(e) => {e.stopPropagation()}}>
                <div className="font-semibold flex items-center justify-center text-white mb-5 text-lg">
                    Select Playlist
                </div>
                <div className="space-y-5">
                    {myPlaylists.map(item=>{
                        return(
                            <PlaylistListComponent 
                                info={item}
                                addSongToPlaylist={addSongToPlaylist}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
};

const PlaylistListComponent = ({info, addSongToPlaylist}) => {
    return (
        <div 
            className="bg-gray w-full flex items-center space-x-4 hover:bg-gray-400 hover:bg-opacity-20 cursor-pinter p-3 rounded"
            onClick={()=> {
                addSongToPlaylist(info._id)
            }}    
        >
            <div>
                <img 
                    src={info.thumbNail} 
                    className="w-10 h-10 rounded"
                    alt="Thumbnail"    
                />
            </div>
            <div className="text-white font-semibold text-sm">
                {info.name}
            </div>
        </div>
    );
};

export default AddToPlaylistModal;