import React, { useEffect, useState } from 'react'
import { useVideo } from '../context/VideoContext'

function PlayListDialog() {
    const { viewPlayListDialog, setViewPlaylistDiaglog, playLists, createNewPlayList, deletePlayList } = useVideo();
    const [playlistName, setplaylistName] = useState("")
    const handleCreateButton = (event) => {
        createNewPlayList(playlistName)
        setplaylistName("")
    }
    useEffect(() => {
        setplaylistName("")
    }, [viewPlayListDialog])
    return (
        <> {viewPlayListDialog &&

            <div className="absolute min-h-screen w-full flex items-center justify-center bg-black/70 z-10">
                <div className="dialogBox relative flex flex-col items-start justify-start bg-white p-10 w-[30rem] box-content gap-6 rounded drop-shadow-lg">
                    <h2 className="text-4xl drop-shadow-md">Create new Playlist</h2>
                    <ul className="w-full flex flex-col gap-2 text-sm items-start">
                        {playLists.map((playlist) => {
                            return <li key={playlist._id} className="flex items-center justify-center w-full">
                                <p>{playlist.name}</p>
                                <div className="spacer flex-grow"></div>
                                <button onClick={() => deletePlayList(playlist._id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </li>
                        })}
                    </ul>
                    <div className="w-full flex flex-col gap-2">
                        <input value={playlistName} className="w-full bg-slate-500 px-4 py-2 text-white rounded" onChange={e => setplaylistName(e.target.value)} type="text" name="playlist" id="playlist" />
                        <button disabled={playlistName.length === 0} onClick={handleCreateButton} type='submit' className="w-full disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none bg-red-200 py-2 rounded hover:bg-red-400 hover:text-white shadow-lg hover:shadow-red-400 transition-all hover:font-bold">Create new Playlist</button>
                    </div>
                    <button onClick={() => setViewPlaylistDiaglog(false)} className="absolute -top-10 -right-10 text-white hover:text-red-700" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

        }</>
    )
}

export default PlayListDialog