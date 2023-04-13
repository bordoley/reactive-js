import { Equality, Factory, Updater } from "../../../functions.js";
import Observable_stateStore from "../../../rx/Observable/__internal__/Observable.stateStore.js";
import {
  StreamableLike,
  StreamableLike_isEnumerable,
  StreamableLike_isInteractive,
  StreamableLike_isRunnable,
} from "../../../streaming.js";
import Streamable_createWithConfig from "./Streamable.createWithConfig.js";

const Streamable_createStateStore = <T>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<Updater<T>, T> =>
  Streamable_createWithConfig<Updater<T>, T>(
    Observable_stateStore(initialState, options),
    {
      [StreamableLike_isEnumerable]: true,
      [StreamableLike_isInteractive]: true,
      [StreamableLike_isRunnable]: true,
    },
  );

export default Streamable_createStateStore;
