import { Map } from "../../../containers.js";
import { EncodeUtf8, EnumerableLike } from "../../../rx.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import HigherOrderObservable_encodeUtf8 from "../../HigherOrderObservable/__internal__/HigherOrderObservable.encodeUtf8.js";
import Enumerable_defer from "./Enumerable.defer.js";

const map: Map<EnumerableLike>["map"] = Observable_map;

const Enumerable_encodeUtf8: EncodeUtf8<EnumerableLike>["encodeUtf8"] =
  /*@__PURE__*/ HigherOrderObservable_encodeUtf8<EnumerableLike>(
    Enumerable_defer,
    map,
  );

export default Enumerable_encodeUtf8;
