import React from 'react'
import { FaThumbsDown, FaThumbsUp, FaRegMessage } from "react-icons/fa6";
const Vegan = () => {
    return (
        <>
            <div class="containerx my-10">
                <div className="text-2xl font-extrabold my-2">Vegan Recipe</div>
                <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                    <div className='relative'>
                        <div className="my-4 mx-2 shadow-sm p-2">
                            <img className='w-full' src="https://bartaco.com/media/party-pack_a-350x350.jpg" alt="" />

                            <div className="postTitle  bottom-[15%] p-5">
                                <div className="preHeading flex justify-between items-center py-2 text-black text-sm">
                                    <span>Category</span>
                                    <div className="flex items-center align-middle text-md">
                                        <FaRegMessage className='mr-3' />(0)
                                    </div>
                                </div>
                                <h3 className='text-black font-bold text-2xl text-md my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>

                                <div className="author flex justify-between items-center my-8">
                                    <div className="authorIMG flex justify-center items-center">
                                        <img src="https://avatars.githubusercontent.com/u/140804026?v=4" className="max-w-[30px] rounded-full" alt="author" />
                                        <div className="authorDetails ml-5 text-black">
                                            <p>fkc tfhgfhgf hjg </p>
                                        </div>
                                    </div>
                                    <p className=" text-white">November 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-2">
                        <div className="mt-4">
                            <div className="my-4 mx-2 shadow-sm p-2">
                                <img className='w-full' src="https://www.janaoliver.com/uploads/7/8/3/0/78308460/adobestock-216205565_orig.jpeg" alt="" />

                                <div className="postTitle bottom-[15%]">
                                    <div className="preHeading flex justify-between items-center py-2 text-black text-sm">
                                        <span>Category</span>
                                        <div className="flex items-center align-middle text-md">
                                            <FaRegMessage className='mr-3' />(0)
                                        </div>
                                    </div>
                                    <h3 className='text-black font-bold text-lg text-md my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>

                                    <div className="author flex justify-between items-center my-8">
                                        <div className="authorIMG flex justify-center items-center">
                                            <img src="https://avatars.githubusercontent.com/u/140804026?v=4" className="max-w-[30px] rounded-full" alt="author" />
                                            <div className="authorDetails ml-5 text-black">
                                                <p>fkc tfhgfhgf hjg </p>
                                            </div>
                                        </div>
                                        <p className=" text-black">November 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' '>
                            <div className="my-4 mx-2 shadow-sm p-2">
                                <img className='w-full' src="https://i0.wp.com/baltimorefishbowl.com/wp-content/uploads/2016/08/unnamed-3-500x180.jpg?resize=500%2C180" alt="" />

                                <div className="postTitle bottom-[15%]">
                                    <div className="preHeading flex justify-between items-center py-2 text-black text-sm">
                                        <span>Category</span>
                                        <div className="flex items-center align-middle text-md">
                                            <FaRegMessage className='mr-3' />(0)
                                        </div>
                                    </div>
                                    <h3 className='text-black font-bold text-lg text-md my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>

                                    <div className="author flex justify-between items-center my-8">
                                        <div className="authorIMG flex justify-center items-center">
                                            <img src="https://avatars.githubusercontent.com/u/140804026?v=4" className="max-w-[30px] rounded-full" alt="author" />
                                            <div className="authorDetails ml-5 text-black">
                                                <p>fkc tfhgfhgf hjg </p>
                                            </div>
                                        </div>
                                        <p className=" text-black">November 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Vegan
