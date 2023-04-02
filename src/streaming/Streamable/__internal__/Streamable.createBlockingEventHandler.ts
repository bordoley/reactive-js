import { Function1, compose } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_endWith from "../../../rx/Observable/__internal__/Observable.endWith.js";
import Observable_exhaustMap from "../../../rx/Observable/__internal__/Observable.exhaustMap.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_startWith from "../../../rx/Observable/__internal__/Observable.startWith.js";
import { StreamableLike } from "../../../streaming.js";
import Streamable_create from "./Streamable.create.js";

const Streamable_createBlockingEventHandler = <TEvent>(
  op: Function1<TEvent, ObservableLike<unknown>>,
): StreamableLike<TEvent, boolean> =>
  Streamable_create<TEvent, boolean>(
    compose(
      Observable_exhaustMap<TEvent, boolean>(
        compose(
          op,
          Observable_ignoreElements<ObservableLike, boolean>(),
          Observable_startWith<ObservableLike, boolean>(true),
          Observable_endWith<ObservableLike, boolean>(false),
        ),
      ),
      Observable_startWith<ObservableLike, boolean>(false),
    ),
  );

export default Streamable_createBlockingEventHandler;
