import React from 'react'
import { useVideo } from '../context/VideoContext'
import Videos from '../components/Videos'
import LeftNavBar from '../components/LeftNavBar'

function WatchLaterPage() {
    const { watchLater } = useVideo()
    return (
        <div className="HomePage grid grid-cols-10 w-screen">
            <LeftNavBar />
            <div className="category__section min-h-screen col-span-8  p-6 flex flex-col gap-6">
                <h1 className="text-5xl drop-shadow-lg">Watch Later </h1>
                <div className="videoGallery grid grid-cols-4 h-full gap-x-8 gap-y-8 place-content-start grid-flow-row">
                    {watchLater?.map((video) => <Videos key={video._id} videoData={video} />)}
                </div>
            </div>
        </div>
    )
}

export default WatchLaterPage