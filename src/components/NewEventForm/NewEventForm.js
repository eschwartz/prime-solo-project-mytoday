import React, { Fragment, useState } from 'react';
import Message from '../Message/Message';
import Progress from '../Progress/Progress';
import axios from 'axios';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

const NewEventForm = (props) => {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose File');
    const [fileUrl, setFileUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [highlight, setHighlight] = useState(false);
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [imagePreview, setImagePreview] = useState('');
    const user_id = props.store.user.id;
    const date = new Date();
    const newEvent = {
        date: date,
        user_id: user_id,
        title: title,
        description: description,
        file_url: uploadedFile.filePath,
        highlight: highlight
    }

    console.log('Title:', title);
    console.log('Description:', description);
    console.log('filePath:', uploadedFile.filePath);
    console.log('highlight:', highlight);

    const onChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setFileUrl(`/uploads/${e.target.files[0].name}`);
        imageHandler(e.target.files[0]);
    };

    const addImage = async e => {
        const formData = new FormData();
        formData.append('file', file);
        // Try / Catch to post image file to uploads folder
        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { fileName, filePath } = res.data;

            setUploadedFile({ fileName, filePath });
            setMessage('File Uploaded');

        } catch (err) {
            if (err.response.status === 500) {
                setMessage('There was a problem with the server');
            } else {
                setMessage(err.response.data.msg);
            }
        }

    }

    const toggleHighlight = () => {
        highlight ? setHighlight(false) : setHighlight(true);
    }

    const onSubmit = e => {
        e.preventDefault();
        // sending items to db
        props.dispatch({
            type: 'ADD_ITEM',
            payload: newEvent
        })

    };

    const imageHandler = e => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagePreview(reader.result);
            }
        }

        reader.readAsDataURL(e);
    }

    return (
        <Fragment>
            <h4>New Event Form Component</h4>
            <div>
                <input
                    type='file'
                    className='custom-file-input'
                    id='customFile'
                    onChange={onChange}
                />
                <button onClick={() => addImage()}>Upload Image</button>
                {/* <Progress percentage={uploadPercentage} /> */}
                <div>
                    <img src={imagePreview} alt="" id="img" />
                </div>

            </div>
            <form onSubmit={onSubmit}>
                <div className='custom-file mb-4'>
                    <input
                        type='text'
                        className='custom-title-input'
                        id='title'
                        value={title}
                        placeholder='title'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type='text'
                        className='custom-description-input'
                        id='description'
                        value={description}
                        placeholder='description'
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <input
                        type='checkbox'
                        className='custom-checkbox-input'
                        id='highlighCheckbox'
                        value={highlight}
                        onClick={toggleHighlight}
                    />
                    Make Highlight?

                </div>

                <input
                    type='submit'
                    value='Add Event'
                    className='btn btn-primary btn-block mt-4'
                />
            </form>

            <div>
                <button>Cancel</button>
            </div>
        </Fragment>
    );
};

export default connect(mapStoreToProps)(NewEventForm);