const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMNET = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const changeColor = color => ({type: CHANGE_COLOR, color});
export const increment = () => ({type: INCREMNET});
export const decrement = () => ({type: DECREMENT});

const initialState = {
    color: 'red',
    number: 0
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            return {
                ...state,
                color: action.color
            }
        case INCREMNET:
            return {
                ...state,
                number: state.number + 1
            };
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state;
    }
}