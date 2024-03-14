import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";

const Dashboard = () => {
  const { id: userId } = useParams();
  // const [userData, setUserData] = useState();
  // const [dateOfBirth, setdateOfBirth] = useState();
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [address, setaddress] = useState();
  // const [schoolName, setschoolName] = useState();

  useEffect(() => {
    fngetUserDeatils();
  }, []);
  const fngetUserDeatils = () => {
    let token = localStorage.getItem("token");

    console.log("token", token, "userId", userId);
    axios
      .get(`http://localhost:5000/getUserProfileByID`, {
        params: {
          userID: userId,
        },
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div>
      <MDBBtn onClick={fngetUserDeatils}>Click here to show details</MDBBtn>{" "}
    </div>
  );
};

export default Dashboard;
