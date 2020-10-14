import React, { Fragment, useState } from 'react';
import Message from '../Message/Message';
import Progress from '../Progress/Progress';
import axios from 'axios';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

const FileUpload = (props) => {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose File');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [fileUrl, setFileUrl] = useState('');
    const [message, setMessage] = useState('');
    const [highlight, setHighlight] = useState(false);
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const user_id = props.store.user.id;
    const date = new Date();

    const newEvent = {
        date: date,
        user_id: user_id,
        title: title,
        description: description,
        file_url: fileUrl,
        highlight: highlight
    }

    console.log('Title:', title);
    console.log('Description:', description);
    console.log('filePath:', fileUrl);
    console.log('highlight:', highlight);

    const onChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setFileUrl(`/uploads/${e.target.files[0].name}`)
    };

    const toggleHighlight = () => {
        highlight ? setHighlight(false) : setHighlight(true);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        console.log('newEvent is:', newEvent);


        // Try / Catch to post image file to uploads folder
        try {
            await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setMessage('File Uploaded');
        } catch (err) {
            if (err.response.status === 500) {
                setMessage('There was a problem with the server');
            } else {
                setMessage(err.response.data.msg);
            }
        }

        // sending items to db
        props.dispatch({
            type: 'ADD_ITEM',
            payload: newEvent
        })

    };


    return (
        <Fragment>
            {message ? <Message msg={message} /> : null}
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
                        type='file'
                        className='custom-file-input'
                        id='customFile'
                        onChange={onChange}
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

                <Progress percentage={uploadPercentage} />

                <input
                    type='submit'
                    value='Upload'
                    className='btn btn-primary btn-block mt-4'
                />
            </form>
            <div></div>
        </Fragment>
    );
};

export default connect(mapStoreToProps)(FileUpload);