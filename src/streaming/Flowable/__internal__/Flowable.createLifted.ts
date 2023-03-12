import { ContainerOperator } from "../../../containers.js";
import { compose } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import { FlowableLike, FlowableState } from "../../../streaming.js";
import Streamable_createLifted from "../../Streamable/__internal__/Streamable.createLifted.js";

const Flowable_createLifted = <T>(
  op: ContainerOperator<ObservableLike, FlowableState, T>,
  isRunnable: boolean,
): FlowableLike<T> =>
  Streamable_createLifted(
    compose(Observable_distinctUntilChanged<FlowableState>(), op),
    false,
    false,
    isRunnable,
  );

export default Flowable_createLifted;
