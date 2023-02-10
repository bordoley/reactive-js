import { Factory } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create";
import { DisposableOrTeardown } from "../../../util";
import ReactiveContainer_onSink from "../../ReactiveContainer/__internal__/ReactiveContainer.onSink";

const Observable_onSubscribe =
  <T>(f: Factory<DisposableOrTeardown | void>) =>
  (obs: ObservableLike<T>): ObservableLike<T> => {
    return ReactiveContainer_onSink(Observable_create, obs, f);
  };

export default Observable_onSubscribe;
