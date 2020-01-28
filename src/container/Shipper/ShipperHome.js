import React from 'react';

// styling
import { Flex } from 'rebass';


function ShipperHome() {

  const attributionStyles = { 
    flexWrap: 'row',
    width: '100%',
    padding: '3%',
    fontSize: '15px',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <Flex style={attributionStyles}>
      Route map Created by -
      <a target="_top" href="https://www.kiln.digital/">
        London-based data visualisation studio Kiln
      </a>
      <br/>
      - and the -<a target="_top" href="http://www.bartlett.ucl.ac.uk/energy">UCL Energy Institute</a>-
    </Flex>
  )
};
export default ShipperHome;