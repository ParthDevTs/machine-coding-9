import React, { useState } from 'react'
import { useVideo } from '../context/VideoContext'
import Videos from '../components/Videos'
import LeftNavBar from '../components/LeftNavBar'

function Explore() {
    const [searchTerm, setSearchTerm] = useState("")
    const { videos } = useVideo()
    const search = (video) => {
        return searchTerm.toLowerCase() === "" ? video : video.title.toLowerCase().includes(searchTerm)
    }

    return (
        <div className="HomePage grid grid-cols-10 w-screen">
            <LeftNavBar />
            <div className="category__section min-h-screen col-span-8  p-6 flex flex-col gap-6">
                <input onChange={e => setSearchTerm(e.target.value)} value={searchTerm} placeholder='search videos' type="text"
                    className="border-b px-4 py-2" />

                <div className="videoGallery grid grid-cols-4 h-full gap-x-4 gap-y-8 place-content-start grid-flow-row">
                    {videos.filter(video => search(video)).map((video) => <Videos key={video._id} videoData={video} />)}
                </div>
            </div>
        </div>
    )
}

export default Explore