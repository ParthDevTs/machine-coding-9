import React from 'react'
import LeftNavBar from '../components/LeftNavBar'
import { useParams } from 'react-router-dom'
import { useVideo } from '../context/VideoContext'
import Videos from '../components/Videos'

function PlaylistView() {
    const { playlistName } = useParams()
    const { videos } = useVideo()
    const filteredVideos = videos?.filter((video) => {
        const exists = video?.playlists?.find(playlist => playlist === playlistName)
        if (exists) {
            return true
        } else {
            return false
        }
    })

    console.log(filteredVideos)
    return (
        <div className="HomePage grid grid-cols-10 w-screen">
            <LeftNavBar />
            <div className="category__section min-h-screen col-span-8 p-6 flex flex-col gap-6">
                <h1 className="text-5xl drop-shadow-lg">{playlistName}</h1>

                <div className="videoGallery grid grid-cols-4 h-full gap-x-8 gap-y-8 place-content-start grid-flow-row">
                    {filteredVideos?.map((video) => <Videos key={video._id} videoData={video} />)}
                </div>
            </div>
        </div>
    )
}

export default PlaylistView