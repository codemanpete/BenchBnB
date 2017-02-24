import React from 'react';
import { withRouter } from 'react-router';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lat, lng, description } = this.props.bench;
    return (
      <div className="bench-index-item">
        Description: { description }
        <br></br>
        latitude: { lat }
        <br></br>
        longitude: { lng }
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default withRouter(IndexItem);
