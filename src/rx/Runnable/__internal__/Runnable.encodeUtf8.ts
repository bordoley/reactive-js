import { Map } from "../../../containers.js";
import { EncodeUtf8, RunnableContainerLike } from "../../../rx.js";
import HigherOrderObservable_encodeUtf8 from "../../HigherOrderObservable/__internal__/HigherOrderObservable.encodeUtf8.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_defer from "./Runnable.defer.js";

const map: Map<RunnableContainerLike>["map"] = Observable_map;

const Runnable_encodeUtf8: EncodeUtf8<RunnableContainerLike>["encodeUtf8"] =
  /*@__PURE__*/ HigherOrderObservable_encodeUtf8<RunnableContainerLike>(
    Runnable_defer,
    map,
  );

export default Runnable_encodeUtf8;
