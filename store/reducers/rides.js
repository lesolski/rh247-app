import { FakeData } from '../../data/colleagues'


const Colleagues = FakeData();

const initialState = {
  all_colleagues: Colleagues
};

const ridesReducer = (state = initialState, action) => {
  return state;
};

export default ridesReducer;