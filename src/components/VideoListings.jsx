import React from 'react'
import { useVideo } from '../context/VideoContext'

function VideoListings() {
    const { videos, navigate } = useVideo()
    return (
        <div className="col-span-3 min-h-full border-l flex flex-col  gap-6 p-4">
            <h2 className="text-2xl drop-shadow-md">More Videos</h2>
            <div className="videoList flex flex-col items-start justify-start gap-4">
                {videos?.map((video) => {
                    return (
                        <div key={video._id}
                            onClick={() => navigate(`/video/${video._id}`)}
                            className="flex gap-2 cursor-pointer">
                            <img className="w-[10rem] h-[5.625rem] rounded hover:scale-105 transition-all" src={video?.thumbnail} alt={video?.title} />
                            <div className="videoDetails h-full flex flex-col items-start justify-start gap-2">
                                <p className="text-xs font-bold">{video?.title}</p>
                                <p className="text-xs">{video?.creator}</p>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default VideoListings