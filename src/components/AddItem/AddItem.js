import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class AddItem extends React.Component {

    state = {
        description: '',
        image_url: '',
        user_id: this.props.store.user.id

    }

    handleChange = (event) => {
        console.log('in handleChange', event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.dispatch({
            type: 'ADD_ITEM',
            payload: this.state
        })
        this.clearInputFields();
    }

    clearInputFields = () => {
        this.setState({
            description: '',
            image_url: '',
            user_id: '',
        });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.description}
                        name="description"
                        placeholder="Description"
                    />
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.image_url}
                        name="image_url"
                        placeholder="Image URL"
                    />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(AddItem);