import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import {
    Button,
    Alert,
    Modal
} from "react-bootstrap";
const Homepage = () =>{
    const data = {
        title:  "Welcome To My Website",
        subtitle:  "Hello My Dear Friends"
    }
    const array  = [1,2,3,4,5,6,7];
    const demo = () =>{
        return "Watch And Give Review";
    }
    const test = () =>{
        alert();
    }
    const h3 = {
        fontSize: "20px",
        color: "green"
    }
    const design = (  
        <>
           <h1 style={{fontSize:"45px",color:"blue"}}>{data.title}</h1>
           <h3 style={h3}>{data.subtitle}</h3>
           <p style={{color:"red"}}>{array}</p>
           <p style={{fontSize: "25px", color: "darkblue", fontWeight: "bold"}}>{JSON.stringify(data)}</p>
           <p style={{color:"purple"}}>{JSON.stringify(new Date())}</p>
           <h3 style={{color:"red"}}>{demo()}</h3>
           <Button className="animate__animated animate__flash animate__infinite" variant="warning" style={{fontWeight: 'bold',fontSize: '25px'}} onClick={test}>Click Me</Button> 
           <Alert variant="info" style={{ color: 'blue', fontSize: '30px', padding: '10px', textAlign: 'center', margin: '10px' }}>
              Read more about our services please contect us</Alert>

            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
            <Modal.Dialog>
                <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </div>
        </>
    );
    return design;
}

export default Homepage;