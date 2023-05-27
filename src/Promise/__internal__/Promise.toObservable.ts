import EventSource_toObservable from "../../EventSource/__internal__/EventSource.toObservable.js";
import type * as Promise from "../../Promise.js";
import { compose } from "../../functions.js";
import Promise_toEventSource from "./Promise.toEventSource.js";

const Promise_toObservable: Promise.Signature["toObservable"] = <T>() =>
  compose(Promise_toEventSource<T>(), EventSource_toObservable());

export default Promise_toObservable;
