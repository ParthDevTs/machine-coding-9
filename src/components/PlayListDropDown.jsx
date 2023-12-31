import React, { useState } from 'react'
import { useVideo } from '../context/VideoContext'

function PlayListDropDown({ videoId }) {
    const [showDrpDwn, setShowDrpDown] = useState(false)
    const { playLists, deletePlayList, addVideoToPlayList, setViewPlaylistDiaglog, findVideoinPlaylist } = useVideo()
    const handleAddToPlaylist = (videoId, playlistName) => {
        addVideoToPlayList(videoId, playlistName)
        setShowDrpDown(false)
    }

    return (
        <div className="relative z-10">
            <button onClick={() => setShowDrpDown(!showDrpDwn)} className="flex items-center z-10 justify-end tracking-wider border-transparent active:border-slate-500 duration-300 active:text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
            </button>


            {showDrpDwn && (
                <div className="bg-white z-10  box-border border  absolute top-[40px] backdrop-filter backdrop-blur-xl shadow-lg w-[12rem]  flex flex-col gap-1  rounded-sm right-3 py-2 ">
                    <p className="text-slate-800 px-4 w-full text-center  text-md">Add to Playlist</p>
                    <div className="w-full z-10 flex flex-col gap-2 text-sm items-start">
                        {playLists.map((playlist) => {
                            return <li onClick={() => handleAddToPlaylist(videoId, playlist.name)} key={playlist._id}
                                className={` ${findVideoinPlaylist(videoId, playlist.name) ? "bg-slate-500 cursor-not-allowed" : "cursor-pointer hover:bg-slate-100"} py-2 text-slate-600 text-xs flex px-4  items-center justify-start w-full z-10`}>
                                <p>{playlist.name}</p>
                                <div className="spacer flex-grow"></div>
                                <button onClick={(event) => {
                                    event.stopPropagation()
                                    deletePlayList(playlist._id)
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </li>
                        })}
                    </div>
                    <button onClick={() => { setViewPlaylistDiaglog(true); setShowDrpDown(false) }} className="del__button py-2 text-slate-600 flex px-4  items-center justify-start w-full   text-sm hover:bg-slate-100 ">
                        <p className=" drop-shadow-lg">Create New Playlist</p>
                    </button>

                </div>
            )}
        </div>
    )
}

export default PlayListDropDown