import { Function1, compose } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_switchMap from "../../../rx/Observable/__internal__/Observable.switchMap.js";
import { StreamableLike } from "../../../streaming.js";
import Streamable_create from "./Streamable.create.js";

const Streamable_createSwitchingEventHandler = <TEvent>(
  op: Function1<TEvent, ObservableLike<unknown>>,
): StreamableLike<TEvent, never> =>
  Streamable_create<TEvent, never>(
    Observable_switchMap<TEvent, never>(
      compose(op, Observable_ignoreElements<ObservableLike, never>()),
    ),
  );

export default Streamable_createSwitchingEventHandler;
