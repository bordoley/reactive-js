import { Container, RunnableContainer } from "../../../core.js";

import Container_concatMap from "../../../core/Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_concatAll from "./Runnable.concatAll.js";

const map: Container.TypeClass<RunnableContainer>["map"] = Observable_map;

const Runnable_concatMap: Container.TypeClass<RunnableContainer>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(map, Runnable_concatAll);

export default Runnable_concatMap;
