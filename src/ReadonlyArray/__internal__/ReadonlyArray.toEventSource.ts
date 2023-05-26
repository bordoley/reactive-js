import Iterable_toEventSource from "../../Iterable/__internal__/Iterable.toEventSource.js";
import { compose } from "../../functions.js";
import ReadonlyArray_toIterable from "./ReadonlyArray.toIterable.js";

const ReadonlyArray_toEventSource = <T>(options?: {
  readonly count?: number;
  readonly start?: number;
}) => compose(ReadonlyArray_toIterable<T>(options), Iterable_toEventSource());

export default ReadonlyArray_toEventSource;
