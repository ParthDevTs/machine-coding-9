import React from 'react'
import LeftNavBar from '../components/LeftNavBar'
import { useVideo } from '../context/VideoContext'
import Category from '../components/Category'


function Home() {
    const { categories } = useVideo()

    return (
        <div className="HomePage grid grid-cols-10 w-screen">
            <LeftNavBar />
            <div className="category__section min-h-screen col-span-8 p-6 flex flex-col gap-6">
                <h1 className="text-5xl drop-shadow-lg">Categories</h1>
                <div className="videoGallery grid grid-cols-4 h-full gap-x-8 gap-y-8 place-content-start grid-flow-row">
                    {categories.map((category) => {
                        return <Category categoryData={category} key={category._id} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home