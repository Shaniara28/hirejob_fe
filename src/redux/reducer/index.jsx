import { combineReducers } from '@reduxjs/toolkit';
import { workerReducer } from './worker';
import { skillsReducer } from './skill';
import { portofolioReducer } from './portofolio';
import { experienceReducer } from './experience';

const rootReducer = combineReducers({
  workerReducer,
  skillsReducer,
  portofolioReducer,
  experienceReducer,
});

export default rootReducer;
