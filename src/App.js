import './App.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function App(props) {

  console.log(props);

  const titleData = ['Silicones', 
  'API\'s', 
  'Silver Ion Technology', 
  'Pigments/Paints',
  'Renewable Energy Products',
  'Water Treatment Chemicals',
  'Construction Chemicals'
];
  const subTitleData = ['', 
  '(Active Pharmaceutical Ingredients)', 
  '',
  '',
  '',
  '',
  '',
  '',
];

  return (
    <div className="App">
      

      <Card style={{marginTop: 20 + 'px'}} className="Card" >
        {/* <CardImg top width="100%" src="https://via.placeholder.com/318x180" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle tag="h5">{titleData[props.id]}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{subTitleData[props.id]}</CardSubtitle>
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          <Button color="success" className="btn">Know More</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;