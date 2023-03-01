import { Factory } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import { DisposableOrTeardown } from "../../../util.js";
import Observable_onSink from "../../Observable/__internal__/Observable.onSink.js";

const Observable_onSubscribe =
  <T>(f: Factory<DisposableOrTeardown | void>) =>
  (obs: ObservableLike<T>): ObservableLike<T> =>
    Observable_onSink(Observable_create, obs, f);

export default Observable_onSubscribe;
