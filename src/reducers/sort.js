

const initialState = [];

export default function sort(state = [], action) {
  if (action.type === 'RESPONSE_DATE') {
    return action.payload;
    }
    else if (action.type === 'RESPONSE_SEARCH') {
        return action.payload;
        }
  return state;
}
