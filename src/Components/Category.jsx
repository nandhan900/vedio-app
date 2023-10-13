import React, { useEffect } from 'react'
import { Modal,Button,Form } from 'react-bootstrap';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { saveCategory,getCategory,deleteCategory, getAVideo, updateCategory } from '../services/allAPI';

function Category() {
  const [allCategory,setAllCategory]=useState("")
  const[categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory=async()=>{
    if(categoryName){
      const  body={
        categoryName,allVideos:[]
      }
      
      //make api call
      const response=await saveCategory(body)
      if(response.status>=200 && response.status<300){
        //hide modal
        handleClose()
        //reset state
        setCategoryName("")
        //handle get category
        handleGetCategory()

      }else{
        toast.warning("uploading error...perform the operation after  sometime!!!")
      }
    }else{
      toast.warning("please provide category name")
    }
  }
  const handleGetCategory=async()=>{
    //make api call
    const{data}=await getCategory()
    setAllCategory(data);

  }
  
  const handleDeleteCategory= async(id)=>{
    //make api call
    await deleteCategory(id)
    //get all category
    handleGetCategory()
  }
  
  console.log(allCategory);
  useEffect(()=>{
    handleDeleteCategory()
  },[])
  const dragOver =(e)=>{
    console.log("dragging over");
    e.preventDefault()
  }
  const videoDrpped= async()=>{(e,CategoryId)
    const videoCardId =e.dataTransfer.getData("cardId")
    const{data}=await getAVideo(videoCardId)
    const selectedCategory=allCategory.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    await  updateCategory(CategoryId,selectedCategory)
    handleGetCategory()
  }




  
  return (
    <>
    <div className='d-grid'>
      <button className='btn  btn-info' onClick={handleShow}>add new Category</button>

    </div>
    {
      allCategory.length>0?allCategory?.map(item=>(
        <div className="border mt-3 mb-3 p-3 rounded" droppable onDragOver={(e)=>dragOver} 
        onDrop={(e)=>videoDrpped(e.item?.id)}>
          <div className="d-flex justify-content-between align-items-center">
          <h6>{item?.categoryName}</h6>
          <button   onClick={()=>handleDeleteCategory(item?.id)}className='btn'> <i className="fa-soild fa-trash text-danger"></i></button>
        </div>
        {
          item?.allVideos&&
          <row>
            {
              item?.allVideos.map(card=>(
                <col sm={12}>
                  <videoCard displayData={card} insideCategory={true}/>
                  </col>
              ))
            }
          </row>
        }
        </div>
      )):<p className='fw-bolder mt-3 fs-5 text-danger'>No categories are added!!!</p>
    }
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false} 
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Enter category name</p>
          <Form className='border border-secondary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter  category name"  onChange={(e)=>setCategoryName(e.target.value)}/>        
      </Form.Group>
      
          </Form>
       </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} className='btn btn-info'>add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer 
    position='top-center'
    theme='colored'
    autoClose={2000}/>
    </>
    
  )
}


export default Category;