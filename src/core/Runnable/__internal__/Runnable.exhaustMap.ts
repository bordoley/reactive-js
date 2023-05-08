import {
  Container,
  ReactiveContainer,
  RunnableContainer,
} from "../../../core.js";
import Container_concatMap from "../../../core/Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_exhaust from "./Runnable.exhaust.js";

const map: Container.TypeClass<RunnableContainer>["map"] = Observable_map;

const Runnable_exhaustMap: ReactiveContainer.TypeClass<RunnableContainer>["exhaustMap"] =
  /*@__PURE__*/ Container_concatMap(map, Runnable_exhaust);

export default Runnable_exhaustMap;
