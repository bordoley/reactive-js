import { Container } from "../../../containers.js";
import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { Reactive, RunnableContainer } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_switchAll from "./Runnable.switchAll.js";

const map: Container.Map<RunnableContainer>["map"] = Observable_map;

const Runnable_switchMap: Reactive.SwitchMap<RunnableContainer>["switchMap"] =
  /*@__PURE__*/ Container_concatMap(map, Runnable_switchAll);

export default Runnable_switchMap;
