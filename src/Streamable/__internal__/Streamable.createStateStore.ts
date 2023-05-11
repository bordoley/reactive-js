import Observable_stateStore from "../../Observable/__internal__/Observable.stateStore.js";
import { Equality, Factory, Updater } from "../../functions.js";
import { StreamableLike } from "../../types.js";
import Streamable_create from "./Streamable.create.js";

const Streamable_createStateStore = <T>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<Updater<T>, T> =>
  Streamable_create<Updater<T>, T>(
    Observable_stateStore(initialState, options),
  );

export default Streamable_createStateStore;
