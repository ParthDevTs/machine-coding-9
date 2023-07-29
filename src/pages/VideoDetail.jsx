import React from 'react'
import { useParams } from 'react-router-dom'
import { useVideo } from '../context/VideoContext'
import LeftNavBar from '../components/LeftNavBar'
import VideoListings from '../components/VideoListings'
import PlayListDropDown from '../components/PlayListDropDown'

function VideoDetail() {
    const { videoId } = useParams()
    const { videos, addVideoToWatchLater, removeFromWatchLater, findInWatchLater } = useVideo()
    const videoData = videos.find(video => video._id === parseInt(videoId))
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
        <div className="VideoListing grid grid-cols-10">
            <LeftNavBar className="" />
            <div className="category__section h-screen p-6 flex flex-col gap-6 col-span-5">
                <div className="video">
                    <iframe
                        className="w-full h-[30rem]"
                        src={`${videoData.src}?autoplay=1`}
                        title={videoData.title}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen="true">
                    </iframe>
                </div>
                <div className="videoInfo border-b flex py-2 gap-4 items-center justify-between">
                    <img
                        src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
                        alt="Avatar" className="w-8 h-8" />
                    <p>{videoData.title}</p>
                    <div className="spacer flex-grow"></div>
                    <button onClick={handleAddToWatchLaterClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 transition-all ${existsInWatchLater ? " text-indigo-600 " : " text-black"}`}>
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>


                    </button>
                    <PlayListDropDown videoId={videoData._id} />
                </div>
                <div className="notes mt-4 border-b">
                    <h2 className="text-3xl drop-shadow-lg">My Notes</h2>
                </div>
            </div>
            <VideoListings />

        </div>
    )
}

export default VideoDetail