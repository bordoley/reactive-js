import HigherOrderObservable_encodeUtf8 from "../../HigherOrderObservable/__internal__/HigherOrderObservable.encodeUtf8.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { EnumerableContainer } from "../../containers.js";
import Enumerable_defer from "./Enumerable.defer.js";

const map: EnumerableContainer.TypeClass["map"] = Observable_map;

const Enumerable_encodeUtf8: EnumerableContainer.TypeClass["encodeUtf8"] =
  /*@__PURE__*/ HigherOrderObservable_encodeUtf8<EnumerableContainer.Type>(
    Enumerable_defer,
    map,
  );

export default Enumerable_encodeUtf8;
