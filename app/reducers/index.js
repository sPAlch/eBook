import { combineReducers } from 'redux-immutable';
//import config from'./configReducers';
//import theDefaultReducer, {firstNamedReducer, secondNamedReducer} from "./config/configReducers";
import config from './data/configReducers';// import routes from './routes';

const rootReducer = combineReducers({
  config
});

export default rootReducer;