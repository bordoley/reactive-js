/// <reference types="./Observable.isReplayObservable.d.ts" />

import * as Obj from "../../__internal__/Object.js";
import { isObject } from "../../functions.js";
import { ReplayObservableLike_buffer, } from "../../types.js";
const ReplayObservable_isReplayObservable = (o) => isObject(o) && Obj.hasOwn(o, ReplayObservableLike_buffer);
export default ReplayObservable_isReplayObservable;
