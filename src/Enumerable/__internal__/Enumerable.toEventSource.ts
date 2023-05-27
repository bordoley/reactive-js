import Iterable_toEventSource from "../../Iterable/__internal__/Iterable.toEventSource.js";
import Observable_toIterable from "../../Observable/__internal__/Observable.toIterable.js";
import { compose } from "../../functions.js";
import type * as Enumerable from "./../../Enumerable.js";

const Enumerable_toEventSource: Enumerable.Signature["toEventSource"] = <T>() =>
  compose(Observable_toIterable<T>(), Iterable_toEventSource());

export default Enumerable_toEventSource;
