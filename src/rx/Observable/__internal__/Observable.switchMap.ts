import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { ObservableContainer, SwitchMap } from "../../../rx.js";
import Observable_map from "./Observable.map.js";
import Observable_switchAll from "./Observable.switchAll.js";

const Observable_switchMap: SwitchMap<ObservableContainer>["switchMap"] =
  /*@__PURE__*/ Container_concatMap(Observable_map, Observable_switchAll);

export default Observable_switchMap;
