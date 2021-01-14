const initialState = {
    tutorials: [],
    error: ''
}

export default function fetch(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_BEGIN':
            return state;
        case 'FETCH_SUCCESS':
            let tutorials = action.payload;
            return { ...state, tutorials };
        case 'FETCH_FAILURE':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
