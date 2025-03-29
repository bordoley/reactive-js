/// <reference types="./Streamable.actionReducer.d.ts" />

import * as Observable from "../../Observable.js";
import Streamable_create from "./Streamable.create.js";
const Streamable_actionReducer = (reducer, initialState, options) => Streamable_create(Observable.scanDistinct(reducer, initialState, options));
export default Streamable_actionReducer;
