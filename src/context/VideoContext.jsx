import { createContext, useContext, useEffect, useState } from "react";
import { videos as VideoDB, categories as categorieDB } from "../database/data"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuid } from 'uuid'

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {

    const navigate = useNavigate()
    const [videos, setVideos] = useState(VideoDB)
    const [categories, setCategories] = useState(categorieDB)
    const [watchLater, setWatchLater] = useState([])
    const [playLists, setPlayLists] = useState([])
    const [viewPlayListDialog, setViewPlaylistDiaglog] = useState(false)
    const findInWatchLater = (id) => {
        const findVideo = watchLater.find(({ _id }) => _id === id)
        return findVideo ? true : false
    }
    const findInPlayLists = (newPlaylist) => {
        const findPlayList = playLists.find(({ name }) => name === newPlaylist)
        return findPlayList ? true : false
    }
    const findVideoinPlaylist = (videoId, playlistName) => {
        const video = videos.find(video => video._id === parseInt(videoId))
        const exists = video.playlists.find(playlist => playlist === playlistName)
        if (exists) {
            return true
        } else {
            return false
        }
    }


    const addVideoToWatchLater = (video) => {

        if (findInWatchLater(video._id)) {
            toast.error("Already in WatchList")
        } else {
            setWatchLater([...watchLater, video])
            localStorage.setItem("watchLaterList", JSON.stringify([...watchLater, video]))
            toast.success("Added to WatchLater")
        }

    }

    const removeFromWatchLater = (id) => {

        if (!findInWatchLater(id)) {
            toast.error("Video not in watch List")
        } else {
            const newWatchList = watchLater.filter((existingVideo) => existingVideo._id !== id)
            setWatchLater(newWatchList)
            localStorage.setItem("watchLaterList", JSON.stringify(newWatchList))
            toast("Removed from WatchLater")
        }

    }

    const createNewPlayList = (name) => {
        const newPlayList = { _id: uuid(), name }
        if (!findInPlayLists(name)) {
            setPlayLists(prev => [...prev, newPlayList])
            toast.success("PlayList Created")
            localStorage.setItem("playLists", JSON.stringify([...playLists, newPlayList]))
            setViewPlaylistDiaglog(false)
        } else {
            toast.error("Playlist already Exists")
        }

    }

    const deletePlayList = (id) => {
        const updatedPlayLists = playLists.filter((playlist) => playlist._id !== id)
        setPlayLists(updatedPlayLists)
        localStorage.setItem("playLists", JSON.stringify(updatedPlayLists))
        toast("Playlist Deleted")
    }

    const addVideoToPlayList = (videoId, playlistName) => {
        if (findVideoinPlaylist(videoId, playlistName)) {
            toast.error("Already Added to Playlist")
            return false
        }
        const newVideoList = videos.map(video => {
            if (video._id === parseInt(videoId)) {
                return { ...video, playlists: [...video.playlists, playlistName] }
            } else {
                return video
            }
        })
        setVideos(newVideoList)
        toast(`Added to ${playlistName}`)
    }

    const addNotes = (videoId, note) => {

        const newVideoList = videos.map(video => {
            if (video._id === parseInt(videoId)) {
                return { ...video, notes: [...video.notes, note] }
            } else {
                return video
            }
        })

        setVideos(newVideoList)
    }


    useEffect(() => {
        const localStorageList = localStorage.getItem("watchLaterList")
        if (localStorageList?.length > 0 && watchLater?.length === 0) {
            setWatchLater(JSON.parse(localStorageList))
        }
        const localStoragePlayList = localStorage.getItem("playLists")
        if (localStoragePlayList?.length > 0 && playLists?.length === 0) {
            setPlayLists(JSON.parse(localStoragePlayList))
        }
        // eslint-disable-next-line
    }, [])


    return <VideoContext.Provider value={{
        categories, setCategories,
        videos, setVideos,
        navigate,
        watchLater, setWatchLater,
        addVideoToWatchLater,
        findInWatchLater,
        removeFromWatchLater,
        playLists, setPlayLists,
        createNewPlayList,
        deletePlayList,
        viewPlayListDialog, setViewPlaylistDiaglog,
        addVideoToPlayList,
        addNotes,
        findVideoinPlaylist
    }}>
        {children}
    </VideoContext.Provider>
}

export const useVideo = () => useContext(VideoContext)