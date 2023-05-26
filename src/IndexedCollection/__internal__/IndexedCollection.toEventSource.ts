import Iterable_toEventSource from "../../Iterable/__internal__/Iterable.toEventSource.js";
import { compose } from "../../functions.js";
import IndexedCollection_toIterable from "./IndexedCollection.toIterable.js";

const IndexedCollection_toEventSource = <T>(options?: {
  readonly count?: number;
  readonly start?: number;
}) =>
  compose(IndexedCollection_toIterable<T>(options), Iterable_toEventSource());

export default IndexedCollection_toEventSource;
