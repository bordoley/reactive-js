/// <reference types="./Observable.currentTime.d.ts" />

import { identity, none, pipeLazy, returns } from "../../functions.js";
import Observable_generate from "./Observable.generate.js";
import Observable_withCurrentTime from "./Observable.withCurrentTime.js";
const Observable_currentTime = pipeLazy(Observable_generate(identity, returns(none)), Observable_withCurrentTime(identity));
export default Observable_currentTime;
