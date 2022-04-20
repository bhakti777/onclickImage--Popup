import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import DisplayEmployees from "../components/DisplayEmployees";
import ModalEmployeeInfo from "../components/ModalEmployeeInfo";

const MainPage = () => {
  const empjsondata = {
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [
      {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
      },
      {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
      },
      {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg",
      },
      {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg",
      },
      {
        id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://reqres.in/img/faces/5-image.jpg",
      },
      {
        id: 6,
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://reqres.in/img/faces/6-image.jpg",
      },
    ],
    support: {
      url: "https://reqres.in/#support-heading",
      text: "To keep ReqRes free, contributions towards server costs are appreciated!",
    },
  };

  const [empDetails, setempDetails] = useState(empjsondata.data);
  const [empInfo, setEmpInfo] = useState([]);
  console.log("empdata:", empjsondata.data);
  const [show,setShow]=useState(false)
  const [showModal,setShowModal]=useState(false)
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleToggle=()=>{
      setShow(!show)
  }

  return (
    <>
      <Container>
        <div className="margin">
          <Button onClick={handleToggle}>Click here to see employees...</Button>
        </div>

        <div className="flex" show={show}>
          {empDetails.map((employee) => {
            return (
            <>
           {show && <DisplayEmployees employee={employee} handleToggle={handleToggle} showModal={showModal} handleShow={handleShow}/>}
            </>
            )
          })}
        </div>

        {showModal && <ModalEmployeeInfo empInfo={empInfo} showModal={showModal} handleClose={handleClose} />}

      </Container>
    </>
  );
};

export default MainPage;
