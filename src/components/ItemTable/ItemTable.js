import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ItemTable extends React.Component {


    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_ITEMS'

        })
    }

    deleteItem = (id) => {
        console.log('in deleteItem with item id:', id);

        this.props.dispatch({
            type: 'DELETE_ITEM',
            payload: id
        })
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.store.items.map((item, i) => {

                            if (this.props.store.user.id === item.user_id) {
                                return (
                                    <tr>
                                        <td>{item.description}</td>
                                        <td>
                                            <img key={i} src={`${item.file_url}`} />
                                        </td>
                                        <td><button onClick={() => this.deleteItem(item.id)}>Delete</button></td>

                                    </tr>
                                )
                            }
                            else {
                                return (
                                    <tr>
                                        <td>{item.description}</td>
                                        <td>
                                            <img key={i} src={item.image_url} />
                                        </td>

                                    </tr>
                                )
                            }

                        })}




                    </tbody>
                </table>


            </div>
        )
    }
}


export default connect(mapStoreToProps)(ItemTable);
