import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ReactStars from "react-stars";

function GroupExample() {
  return (
    <CardGroup style={{ display: "flex", flexDirection: "column", textAlign: "right" ,width:"300px",marginTop:"30px"}}>
      <Card >
        <Card.Img variant="top" src="tel1.png" />
        <Card.Body>
          <Card.Title>Samsung Galaxy A53 5G</Card.Title>
          <Card.Text>
           Galaxy A53 5G 64 MP + 8 MP + 5 MP + caméra principale 5 MP,8 Go de RAM et 128 Go de ROM. 
           caméra frontale 32 MP et batterie 5000 mAh.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted" >
          <div style={{ display: "flex", alignItems: "center" }}>
  <span style={{ marginRight: "20px" }}>300€</span>
  <ReactStars 
    count={5}
    value={4}
    size={24}
    color2={"#ffd700"}
    edit={false}
    style={{ marginRight: "15px" }}
  />
  <button style={{ backgroundColor: "#ffd700", marginLeft: "30px", border: "none" ,width:"80px"}}>buy</button>
</div>
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="Tel2.jpeg" />
        <Card.Body>
          <Card.Title>REDMI6 Pro</Card.Title>
          <Card.Text>
         écran de 5,45 pouces au format 18:9.processeur MediaTek Helio P22 ,caméra de 12 et 5 Mpix et une batterie de 3000 mAh
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
          <div style={{ display: "flex", alignItems: "center" }}>
  <span style={{ marginRight: "20px" }}>600€</span>
  <ReactStars 
    count={5}
    value={3}
    size={24}
    color2={"#ffd700"}
    edit={false}
    style={{ marginRight: "15px" }}
  />
  <button style={{ backgroundColor: "#ffd700", marginLeft: "30px", border: "none" ,width:"80px"}}>buy</button>
</div>
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="tel3.png" />
        <Card.Body>
          <Card.Title>Iphone 11</Card.Title>
          <Card.Text>
         écran LCD Liquid Retina HD avec 6,1 pouces. Il est résistant à la poussière et à l’eau (jusqu’à 2 mètres pendant 30 ...
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
          <div style={{ display: "flex", alignItems: "center" }}>
  <span style={{ marginRight: "20px" }}>800€</span>
  <ReactStars 
    count={5}
    value={4}
    size={24}
    color2={"#ffd700"}
    edit={false}
    style={{ marginRight: "15px" }}
  />
  <button style={{ backgroundColor: "#ffd700", marginLeft: "30px", border: "none" ,width:"80px"}}>buy</button>
</div>
          </small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;