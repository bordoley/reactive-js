import * as Obj from "../../../__internal__/Object.js";
import {
  ObservableLike,
  ReplayObservableLike,
  ReplayObservableLike_buffer,
} from "../../../concurrent.js";
import { isObject } from "../../../functions.js";

const Observable_isReplayObservable = <T = unknown>(
  o: ObservableLike<T>,
): o is ReplayObservableLike<T> =>
  isObject(o) && Obj.hasOwn(o, ReplayObservableLike_buffer);

export default Observable_isReplayObservable;
