import { Container } from "../../../containers.js";

import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { RunnableContainer } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_concatAll from "./Runnable.concatAll.js";

const map: Container.Map<RunnableContainer>["map"] = Observable_map;

const Runnable_concatMap: Container.ConcatMap<RunnableContainer>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(map, Runnable_concatAll);

export default Runnable_concatMap;
