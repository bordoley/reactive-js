/// <reference types="./Runnable.currentTime.d.ts" />

import { identity, none, pipe, returns } from "../../../functions.js";
import Observable_generate from "../../Observable/__internal__/Observable.generate.js";
import Observable_withCurrentTime from "../../Observable/__internal__/Observable.withCurrentTime.js";
const Runnable_currentTime = (options) => pipe(Observable_generate(identity, returns(none), options), Observable_withCurrentTime(identity));
export default Runnable_currentTime;
