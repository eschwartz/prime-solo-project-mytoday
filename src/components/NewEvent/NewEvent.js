import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ItemTable from '../ItemTable/ItemTable';
import NewEventForm from '../NewEventForm/NewEventForm';



class InfoPage extends React.Component {

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_ITEMS'

    })
  }

  render() {
    console.log('Props is:', this.props);
    return (
      <div>
        <p>New Event</p>
        <NewEventForm />

      </div>
    )
  }
}

{/* {this.props.store.items.map((item, i) =>

          <img key={i} src={item.image_url} />
        )} */}

export default connect(mapStoreToProps)(InfoPage);
