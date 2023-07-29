import React from 'react'
import { useVideo } from '../context/VideoContext'

function Videos({ videoData }) {
    const { navigate, addVideoToWatchLater, findInWatchLater, removeFromWatchLater } = useVideo()
    const existsInWatchLater = findInWatchLater(videoData._id)

    const handleAddToWatchLaterClick = (event) => {
        event.stopPropagation()
        if (existsInWatchLater) {
            removeFromWatchLater(videoData._id)
        } else {
            addVideoToWatchLater(videoData)
        }
    }


    return (
        (
            <div
                onClick={() => navigate(`/video/${videoData._id}`)}
                className="CategorySelectBox relative flex  w-[15rem]  flex-col justify-between rounded cursor-pointer gap-2">
                <img className="h-[8rem] w-full object-cover object-center rounded"
                    src={videoData?.thumbnail} alt={videoData?.category} />
                <p className="text-sm">{videoData?.title}</p>
                <footer className="videoFooter flex gap-2 text-slate-600 text-xs">
                    <p>{videoData.category}</p>
                    <span>|</span>
                    <p>{videoData.views} views</p>
                </footer>
                <button
                    onClick={handleAddToWatchLaterClick}
                    className={`absolute transition-all -right-3 -top-3 ${existsInWatchLater ? "bg-slate-200/50" : "bg-black/40 "} fiter backdrop-blur-sm rounded h-8 w-8 grid place-content-center`}>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 transition-all ${existsInWatchLater ? " text-indigo-600 " : " text-white"}`}>
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        )
    )
}

export default Videos