import { ContainerOperator } from "../../../containers.js";
import { Updater, compose, returns } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import { PauseableState, PauseableState_paused } from "../../../scheduling.js";
import Streamable_createLifted from "../../Streamable/__internal__/Streamable.createLifted.js";

const updateReducer = <T>(acc: T, updater: Updater<T>) => updater(acc);

const Flowable_createLifted = <T>(
  op: ContainerOperator<ObservableLike, PauseableState, T>,
) =>
  Streamable_createLifted(
    compose(
      Observable_scan<ObservableLike, Updater<PauseableState>, PauseableState>(
        updateReducer,
        returns(PauseableState_paused),
      ),
      Observable_distinctUntilChanged<PauseableState>(),
      op,
    ),
  );

export default Flowable_createLifted;
