/// <reference types="./Observable.isReplayObservable.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
import { ReplayObservableLike_buffer, } from "../../../concurrent.js";
import { isObject } from "../../../functions.js";
const Observable_isReplayObservable = (o) => isObject(o) && Obj.hasOwn(o, ReplayObservableLike_buffer);
export default Observable_isReplayObservable;
