export const TOGGLE_BOOLEAN = 'TOGGLE_BOOLEAN';

export function toggleBoolean(currentVal) {
  return {
    type: TOGGLE_BOOLEAN,
    val: currentVal,
  };
}

export default function reducer(state = true, action) {
  console.info('BOOLEAN REDUCER:', action.type);
  switch (action.type) {
    case TOGGLE_BOOLEAN:
      return !action.val;
    default:
      return state;
  }
}
