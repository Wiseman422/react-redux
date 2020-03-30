import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'waiting/CHANGE_INPUT';
const CREATE = 'waiting/CREATE';
const ENTER = 'waiting/ENTER';
const LEAVE = 'waiting/LEAVE';

// export const changeInput = text => ({type: CHANGE_INPUT, payload: text});
// export const create = text => ({type: CREATE, payload: text});
// export const enter = id => ({type: ENTER, payload: id});
// export const leave = id => ({type: LEAVE, payload: id});

let id = 3;
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const create = createAction(CREATE, text => ({text, id: id++}));
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE, id => id);

const initialState = {
    input: '',
    list: [
        {
            id: 0,
            name: 'abc',
            entered: true
        },
        {
            id: 1,
            name: 'bcd',
            entered: false
        },
        {
            id: 2,
            name: 'cde',
            entered: false
        }
    ]
}

export default handleActions(
    {
        [CHANGE_INPUT]: (state, action) => ({
            ...state,
            input: action.payload
        }),
        [CREATE]: (state, action) => ({
            ...state,
            list: state.list.concat({
                id: action.payload.id,
                name: action.payload.text,
                entered: false
            })
        }),
        [ENTER]: (state, action) => ({
            ...state,
            list: state.list.map(
                item =>
                    item.id === action.payload
                        ? {...item, entered: !item.entered}
                        : item
            )
        }),
        [LEAVE]: (state, action) => ({
            ...state,
            list: state.list.filter(item => item.id !== action.payload)
        })
    },
    initialState
);