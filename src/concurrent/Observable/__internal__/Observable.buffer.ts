import { partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_createBufferObserver from "../../Observer/__internal__/Observer.createBufferObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_buffer: Observable.Signature["buffer"] = <T>(options?: {
  count?: number;
}) =>
  pipe(
    Observer_createBufferObserver<T>,
    partial(options?.count),
    Observable_liftPure,
  );

export default Observable_buffer;
