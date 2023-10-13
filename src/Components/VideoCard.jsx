import React from "react";
import { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { addHistory, deleteAVideo } from "../services/allAPI";

function VideoCard({ displayData, setdeleteSpecificVideo }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    //set caption and link
    const { caption, embdedlink } = displayData;
    //generate timestamp
    let today = new Date();
    const timestamp = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(today);
    //watch video to add json server
    let reqBody = {
      caption,
      embdedlink,
      timestamp,
    };
    //make api call
    await addHistory(reqBody);
  };

  const deleteSingleAVideo = async (id) => {
    const response = await deleteAVideo(id);
    setdeleteSpecificVideo(true);
  }
  const dragStatered =(e,id)=>{
    console.log("drag started");
    e.datatransfer.setdata("cardid",id)
  }
  return (
    <>
      {
      displayData &&
        <Card draggable onDragStart={(e)=>dragStatered{e,displayData?.id}} className="mb-3">
          <Card.Img
            onClick={handleShow}
            style={{ height: "180px" }}
            className="w-100"
            variant="top"
            src={displayData?.url}
          />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-center">
              <h6>{displayData?.caption}</h6>
              <button
                onClick={() => deleteSingleAVideo(displayData?.id)}
                className="btn"
              >
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </Card.Title>
          </Card.Body>
        </Card>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width={"100%"}
            height={"400px"}
            src={displayData?.embdedlink}
            title={displayData?.caption}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
