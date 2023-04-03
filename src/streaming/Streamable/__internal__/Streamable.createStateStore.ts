import { Equality, Factory, Updater } from "../../../functions.js";
import Observable_stateStore from "../../../rx/Observable/__internal__/Observable.stateStore.js";
import { StreamableLike } from "../../../streaming.js";
import Streamable_createLifted from "./Streamable.createLifted.js";

const Streamable_createStateStore = <T>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<Updater<T>, T> =>
  Streamable_createLifted<Updater<T>, T>(
    Observable_stateStore(initialState, options),
    true,
    true,
    true,
  );

export default Streamable_createStateStore;
