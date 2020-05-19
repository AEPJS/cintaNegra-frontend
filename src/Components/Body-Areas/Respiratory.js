import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import AbPain from '../Diseases/AbPain'
import Diarrhea from '../Diseases/Diarrhea'
import Vomiting from '../Diseases/Vomiting'

const Respiratory = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ margin:'1rem' }}>Respiratory</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className='d-flex flex-row'>

          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Respiratory;