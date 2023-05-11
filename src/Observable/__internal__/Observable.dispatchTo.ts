import type * as Observable from "../../Observable.js";
import Observer_createDispatchToObserver from "../../Observer/__internal__/Observer.createDispatchToObserver.js";
import { partial, pipe } from "../../functions.js";
import { DispatcherLike } from "../../types.js";
import Observable_liftSource from "./Observable.liftSource.js";

const Observable_dispatchTo: Observable.Signature["dispatchTo"] = <T>(
  dispatcher: DispatcherLike<T>,
) =>
  pipe(
    Observer_createDispatchToObserver,
    partial(dispatcher),
    Observable_liftSource,
  );

export default Observable_dispatchTo;
