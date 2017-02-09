import { INCREMENT_COUNTER } from 'redux/actions/counterActions';
import { SIGN_OUT } from 'redux-oauth';

const initialState = { value: 0 };

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { value: state.value + 1 };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}
