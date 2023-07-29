import React from 'react'
import LeftNavBar from '../components/LeftNavBar'
import { useVideo } from '../context/VideoContext'

function PlayList() {
    const { playLists, setViewPlaylistDiaglog, navigate } = useVideo()
    return (
        <div className="HomePage grid grid-cols-10 w-screen">
            <LeftNavBar />
            <div className="category__section min-h-screen col-span-8 p-6 flex flex-col gap-6">
                <h1 className="text-5xl drop-shadow-lg">PlayLists</h1>
                <div className="videoGallery grid grid-cols-4 h-full gap-x-8 gap-y-8 place-content-start grid-flow-row">
                    {playLists.map(playlist => {
                        return <li onClick={() => navigate(`/playlist/${playlist.name}`)} className=" relative flex  flex-col justify-between rounded cursor-pointer gap-2" key={playlist._id}>
                            <img className="w-[10rem] h-[5.625rem]" src="https://picsum.photos/300/178" alt={playlist.name} />
                            <p>{playlist.name}</p>
                        </li>
                    })}
                    <button
                        onClick={() => setViewPlaylistDiaglog(true)}
                        className="w-[5rem] drop-shadow-xl drop-shadow-current shadow-md shadow-current h-[5rem] relative flex text-indigo-500   flex-col items-center justify-center rounded-full cursor-pointer gap-2 hover:text-indigo-700 hover:bg-slate-100 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlayList