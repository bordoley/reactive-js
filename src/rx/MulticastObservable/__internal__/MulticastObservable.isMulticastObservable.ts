import * as Obj from "../../../__internal__/Object.js";
import { isObject } from "../../../functions.js";
import {
  MulticastObservableLike,
  MulticastObservableLike_buffer,
} from "../../../rx.js";

const MulticastObservable_isMulticastObservable = <T = unknown>(
  o: unknown,
): o is MulticastObservableLike<T> =>
  isObject(o) && Obj.hasOwn(o, MulticastObservableLike_buffer);

export default MulticastObservable_isMulticastObservable;
