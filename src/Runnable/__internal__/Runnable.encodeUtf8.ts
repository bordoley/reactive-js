import HigherOrderObservable_encodeUtf8 from "../../HigherOrderObservable/__internal__/HigherOrderObservable.encodeUtf8.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { RunnableContainer } from "../../containers.js";
import Runnable_defer from "./Runnable.defer.js";

const map: RunnableContainer.TypeClass["map"] = Observable_map;

const Runnable_encodeUtf8: RunnableContainer.TypeClass["encodeUtf8"] =
  /*@__PURE__*/ HigherOrderObservable_encodeUtf8<RunnableContainer.Type>(
    Runnable_defer,
    map,
  );

export default Runnable_encodeUtf8;
