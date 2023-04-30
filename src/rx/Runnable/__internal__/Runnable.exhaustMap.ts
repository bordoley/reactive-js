import { Map } from "../../../containers.js";
import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { ExhaustMap, RunnableContainer } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_exhaust from "./Runnable.exhaust.js";

const map: Map<RunnableContainer>["map"] = Observable_map;

const Runnable_exhaustMap: ExhaustMap<RunnableContainer>["exhaustMap"] =
  /*@__PURE__*/ Container_concatMap(map, Runnable_exhaust);

export default Runnable_exhaustMap;
