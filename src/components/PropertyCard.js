const PropertyCard = ({ index }) => {
  return (
    <div className="card" style={{ border: '1px solid black', marginRight: '5px', marginBottom: '30px', padding: '10px' }}>
      <div className="icons" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="icons_left">
          left
        </div>
        <div className="icons_right">
          right
        </div>
      </div>
      <div className="property_detail" style={{ display: 'flex' }}>
        <div>Property Name</div>
        <div>Location | City</div>
        <div>Property Type</div>
      </div>
    </div>
  );
};

export default PropertyCard;