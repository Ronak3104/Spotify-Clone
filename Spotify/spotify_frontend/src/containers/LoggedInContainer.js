import {Howl, Howler} from 'howler';
import { useContext, useLayoutEffect, useState, useRef} from 'react';
import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../components/shared/IconTect';
import { Icon} from '@iconify/react';
import TextWithHover from '../components/shared/TextWithHover';
import songContext from '../contexts/songContext';
import CreatePlaylistModal from '../modals/CreatePlaylistModal';
import AddToPlaylistModal from '../modals/AddToPlaylistsModal';
import { makeAuthenticateedPOSTRequest } from '../utils/serverHelpers';

const LoggedInContainer =({children, currentActiveScreen}) => {
    const[createPlaylistModalOpen, setCreatePlaylistModalOpen] = 
        useState(false);
    const[addToPlaylistModalOpen, setAddToPlaylistModalOpen] = 
        useState(false);

    const {
        currentSong, 
        setCurrentSong, 
        soundPlayed, 
        setSoundPlayed, 
        isPaused, 
        setIsPaused
    } = useContext(songContext);
    
    const firstUpdate = useRef(true);

    useLayoutEffect(()=>{
        // the following if statement will prevent the useEffect from running on the first render
        if(firstUpdate.current){
            firstUpdate.current = false;
            return;
        }
        if(!currentSong){
            return;
        }
        
        changeSong(currentSong.track);
    }, [currentSong && currentSong.track]);

    const addSongToPlaylist = async (playlistId) => {
        const songId = currentSong._id;

        const payload = {playlistId, songId};
        const response = await makeAuthenticateedPOSTRequest(
            "/playlist/add/song", 
            payload
        );
        if(response._id){
            setAddToPlaylistModalOpen(false);
        }
    };

    const playSound = () => {
        if(!soundPlayed){
            return;
        }
        soundPlayed.play();
    };

    const changeSong = (songsrc) =>{
        if(soundPlayed){
            soundPlayed.stop();
        }
        let sound = new Howl({
            src: [songsrc],
            html5: true,
        })
        setSoundPlayed(sound);
        sound.play();
        setIsPaused(false);
    };

    const pauseSound = () => {
        soundPlayed.pause();
    };

    const togglePlayPause = () => {
        if(isPaused){
            playSound();
            setIsPaused(false);
        }
        else{
            pauseSound();
            setIsPaused(true);
        }
    };

    return(
        <div className="h-full w-full bg-navbar-black">
            {createPlaylistModalOpen && (
                <CreatePlaylistModal 
                    closeModal = {() => {
                        setCreatePlaylistModalOpen(false);
                    }}
                />
            )}
            {addToPlaylistModalOpen && (
                <AddToPlaylistModal 
                    closeModal={() => {
                        setAddToPlaylistModalOpen(false);
                    }}
                    addSongToPlaylist={addSongToPlaylist}
                />
            )}
            <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
                <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                    <div>
                        {/*This div is for left panel*/}
                        <div className="logoDiv p-6">
                            {/*This div is for logo*/}
                            <img src={spotify_logo} alt="spotify_logo" width={125}></img>
                        </div>
                        <div className='py-5'>
                            <IconText  
                                iconName={"material-symbols:home"} 
                                displayText={"Home"} 
                                active={currentActiveScreen === "loggedInHome"}
                                targetLink={"/home"}
                            />
                            <IconText  
                                iconName={"material-symbols:search-rounded"} 
                                displayText={"Search"}
                                active={currentActiveScreen === "search"}
                                targetLink={"/search"}
                            />
                            <IconText 
                                iconName={"icomoon-free:books"} 
                                displayText={"Your Library"}
                                active={currentActiveScreen === "yourLibrary"}
                                targetLink={"/library"}
                            />
                            <IconText 
                                iconName={"material-symbols:library-music-sharp"} 
                                displayText={"My music"}
                                active={currentActiveScreen === "myMusic"}
                                targetLink={"/myMusic"}
                            />
                        </div>
                        <div className='pt-7'>
                            <IconText 
                                iconName={"material-symbols:add-box"} 
                                displayText={"Create Platlist"}
                                onClick={() => {setCreatePlaylistModalOpen(true)}}
                            />
                            <IconText 
                                iconName={"mdi:cards-heart"} 
                                displayText={"Liked Songs"}
                            />
                        </div>
                    </div>
                    <div className='px-5'>
                        <div className='border boder-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer'>
                            <Icon icon="icon-park-outline:earth"/>
                            <div className='ml-2 text-sm font-semibold'>
                                English
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full w-4/5 bg-navbar-black overflow-auto">
                    {/*This div is for right panel(main content)*/}
                    <div className='navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end'>
                    <div className='w-1/2 flex h-full'>
                        <div className='w-2/3 flex justify-around items-center'>
                            <TextWithHover 
                                displayText={"Premium"}
                                targetLink={"/premium"}
                            />
                            <TextWithHover  
                                displayText={"Support"}
                                targetLink={"/support"}
                            />
                            <TextWithHover 
                                displayText={"Download"}
                            />
                            <div className='h-1/2 border-r border-white'></div>
                        </div>
                        <div className='w-1/3 flex justify-around h-full items-center'>
                            <TextWithHover 
                                displayText={"Upload Song"}
                                targetLink={"/uploadSong"}
                            />
                        </div>
                    </div>    
                    </div>
                    <div className='maincontent p-8 pt-0 overflow-auto'>
                        {children}
                    </div>
                </div>
            </div>
            {
                currentSong && (
                <div className='h-1/10 w-full flex bg-black bg-opacity-30 text-white items-center px-4'>
                {/*This div is current playing song*/}
                    <div className='w-1/4 flex items-center'>
                    <img 
                            src={currentSong.thumbNail} 
                            alt='currentSongThumbnail'
                            className='w-14 h-14 rounded'
                        />
                            <div className='pl-4'>
                            <div 
                                className='text-sm hover:underline cursor-pointer'
                            >
                                    {currentSong.name}
                            </div>
                            <div 
                                className='text-xs text-gray-500 hover:underline cursor-pointer'
                            >
                                    {currentSong.artist.firstName+ " "+currentSong.artist.lastName}
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 flex justify-center h-full flex-col items-center'>
                        <div className='flex w-1/3 justify-between items-center'>
                            {/* This is for controls */}
                            <Icon 
                                icon="ph:shuffle-fill"
                                fontSize={30}
                                className='cursor-pointer text-gray-500 hover:text-white'
                            />
                            <Icon 
                                icon="mdi:skip-previous-outline"
                                fontSize={30}
                                className='cursor-pointer text-gray-500 hover:text-white'
                            />
                            <Icon 
                                icon={
                                    isPaused
                                        ? "ic:baseline-play-circle"
                                        : "ic:baseline-pause-circle"}
                                fontSize={45}
                                className='cursor-pointer text-gray-500 hover:text-white'
                                onClick={togglePlayPause}
                            />
                            <Icon 
                                icon="mdi:skip-next-outline"
                                fontSize={30}
                                className='cursor-pointer text-gray-500 hover:text-white'
                            />
                            <Icon 
                                icon="ic:twotone-repeat"
                                fontSize={30}
                                className='cursor-pointer text-gray-500 hover:text-white'
                            />
                        </div>
                        <div>
                            {/* This is for progress bar */}

                        </div>
                    </div>
                    <div className='w-1/4 flex justify-end pr-4 space-x-4 items-center'>
                        <Icon
                            icon="ic:round-playlist-add"
                            fontSize={30}
                            className='cursor-pointer text-gray-500 hover:text-white'
                            onClick={() => {
                                setAddToPlaylistModalOpen(true);
                            }}
                        />
                        <Icon
                            icon="ph:heart-bold"
                            fontSize={25}
                            className='cursor-pointer text-gray-500 hover:text-white'
                        />
                    </div>
                </div>
                )
            }
        </div>
    )
};
export default LoggedInContainer;