import React from 'react';
import { Link } from 'react-router-dom';

// styling imports
import { Flex, Box, Text, Image } from 'rebass';

// components
import ShipperHeader from './ShipperHeader';
import NPHeader from './NPHeader';

// files
import shipForCharityIcon from '../images/shipForCharity.png';
import shipperIcon from '../images/shipper1.png';
import nonprofitIcon from '../images/ribbon.png';


function Header(props) {

  let userType = sessionStorage.getItem('user_type')

  const headerStyles = {
    height: '70px',
    padding: '12px 0 0 0',
    backgroundColor: 'rgb(33,60,71)',
    justifyContent: 'center'
  };

  const homeLinkStyles = {
    color: '#eef0ff',
    fontFamily: 'Work Sans',
    fontSize: '40px',
    fontWeight: 'bold',
    textDecoration: 'none'
  };

  const iconStyles = {
    height: '55px',
    width: '55px',
    marginTop: '-4px',
    marginRight: '15px',
    backgroundColor: '#eef0ff',
    borderStyle: 'solid',
    borderColor: '#eef0ff',
    borderRadius: '5px'
  };

  const mapStyles = { 
    flexWrap: 'row',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <header>

      {/* HEADER NAV BAR */}
      <Flex style={headerStyles}>

        <Flex width='900px' justifyContent='space-between'>
          <Text style={homeLinkStyles}>Ship For Charity</Text>

          { (userType === 'shipper') && <ShipperHeader setID={props.setID}/> } 
          { (userType === 'np') &&  <NPHeader setID={props.setID}/> }

          <Box styles={iconStyles}>
            { (userType === null) && (<div>
                                        <Image src={shipperIcon} style={iconStyles} /> 
                                        <Image src={nonprofitIcon} style={iconStyles} />
                                      </div>) }
            { (userType === 'shipper') && <Image src={shipperIcon} style={iconStyles} /> } 
            { (userType === 'np') &&  <Image src={nonprofitIcon} style={iconStyles} /> }
          </Box>
        </Flex>
      </Flex>

      {/* MAP */}
      {/* { userType ?
          <Box style={mapStyles}>
            <iframe src="//www.shipmap.org" frameborder="0" height='400px' width='100%' >
            </iframe>
            <br/><br/>
          </Box> : <div></div>
      } */}

    </header>
  )
};
export default Header;