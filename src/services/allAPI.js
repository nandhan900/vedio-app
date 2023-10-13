import { commonAPI } from "./commonAPI";
import { serverURl } from "./serverURL";

//uploading video
export const uploadVideo= async(body)=>{
    //call post http request to http://localhost:4000/videos to add video in json server return response to add component
    return await commonAPI("POST", `${serverURl}/videos`,body)
}
//get all videos
export const getAllVideos= async()=>{
    //call post http request to http://localhost:4000/videos to get videos from json server return response to view component
    return await commonAPI("GET", `${serverURl}/videos`,"")
}
//get single video
export const getAVideo= async(id)=>{
    //call post http request to http://localhost:4000/videos to get videos from json server return response to  videocard component
    return await commonAPI("GET", `${serverURl}/videos/${id}`,"")
}
//Delete a single video
export const deleteAVideo= async(id)=>{
    //call post http request to http://localhost:4000/videos to remove videos from json server return response to  videocard component
    return await commonAPI("DELETE", `${serverURl}/videos/${id}`,{})
}
//
export const addHistory= async(videoHistory)=>{
    //call post http request to http://localhost:4000/videos to add video  history in a json server return response to videocard component
    return await commonAPI("POST", `${serverURl}/history`,videoHistory)
}
export const getHistory= async()=>{
    //call get http request to http://localhost:4000/history to get all video  history in a json server return response to watch historycomponent
    return await commonAPI("GET", `${serverURl}/history`,"")

    // add category json  server
}
export const saveCategory= async(body)=>{
    //call post http request to http://localhost:4000/videos to add category in json server return response to cateogory component
    return await commonAPI("POST", `${serverURl}/categories`,body)

    //get cateogory from json server
}
export const getCategory= async()=>{
    //call post http request to http://localhost:4000/videos to get category in json server return response to cateogory component
    return await commonAPI("GET", `${serverURl}/categories`,"")
}
//delete category from json server
export const deleteCategory= async(id)=>{
    //call post http request to http://localhost:4000/videos to  delete category from  json server return response to cateogory component
    return await commonAPI("DELETE", `${serverURl}/categories/${id}`,{})
}
export const updateCategory= async(id,body)=>{
    //call post http request to http://localhost:4000/videos to  update  category from  json server return response to cateogory component
    return await commonAPI("PUT", `${serverURl}/categories/${id}`,body)
}











