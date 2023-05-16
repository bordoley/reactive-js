import * as Obj from "../../__internal__/Object.js";
import { isObject } from "../../functions.js";
import {
  ReplayObservableLike,
  ReplayObservableLike_buffer,
} from "../../types.js";

const ReplayObservable_isReplayObservable = <T = unknown>(
  o: unknown,
): o is ReplayObservableLike<T> =>
  isObject(o) && Obj.hasOwn(o, ReplayObservableLike_buffer);

export default ReplayObservable_isReplayObservable;
