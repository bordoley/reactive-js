import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createMapObserver from "../../Observer/__internal__/Observer.createMapObserver.js";
import { Containers, ObservableContainer } from "../../containers.js";
import { Function1, partial, pipe } from "../../functions.js";

type ObservableMap = <C extends ObservableContainer.Type, TA, TB>(
  selector: Function1<TA, TB>,
) => Containers.Operator<C, TA, TB>;
const Observable_map: ObservableMap = (<TA, TB>(selector: Function1<TA, TB>) =>
  pipe(
    Observer_createMapObserver,
    partial(selector),
    Enumerable_lift,
  )) as ObservableMap;
export default Observable_map;
