import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchItems(action) {
    console.log('in fetchItems saga with', action);

    let response = yield axios({
        method: 'GET',
        url: '/api/shelf'
    });

    console.log('back from GET with:', response.data);

    yield put({
        type: 'SET_ITEMS',
        payload: response.data
    })
}

function* deleteItem(action) {
    console.log('in fetchItems saga with', action);

    let response = yield axios({
        method: 'DELETE',
        url: `/api/shelf/${action.payload}`,
        data: {
            id: action.payload
        }
    });

    console.log('back from DELETE with:', response.data);

    yield put({
        type: 'FETCH_ITEMS',

    })
}

function* addItem(action) {
    console.log('in addItems saga with file', action.payload.file);

    let formData = new FormData();
    formData.append('file', action.payload.file);
    formData.append('date', action.payload.date);
    formData.append('user_id', action.payload.user_id);

    let response = yield axios({
        method: 'POST',
        url: `/api/events`,
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    console.log('back from ADD ITEM with:', response.data);

    yield put({
        type: 'FETCH_ITEMS'

    })
}

function* itemsSaga() {
    yield takeLatest('FETCH_ITEMS', fetchItems);
    yield takeLatest('DELETE_ITEM', deleteItem);
    yield takeLatest('ADD_ITEM', addItem);
}

export default itemsSaga;