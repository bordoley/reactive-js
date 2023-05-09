import HigherOrderObservable_encodeUtf8 from "../../HigherOrderObservable/__internal__/HigherOrderObservable.encodeUtf8.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import {
  Containers,
  RunnableContainer,
  StatefulContainers,
} from "../../types.js";
import Runnable_defer from "./Runnable.defer.js";

const map: Containers.TypeClass<RunnableContainer>["map"] = Observable_map;

const Runnable_encodeUtf8: StatefulContainers.TypeClass<RunnableContainer>["encodeUtf8"] =
  /*@__PURE__*/ HigherOrderObservable_encodeUtf8<RunnableContainer>(
    Runnable_defer,
    map,
  );

export default Runnable_encodeUtf8;
