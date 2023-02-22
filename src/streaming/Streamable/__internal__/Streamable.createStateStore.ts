import { Equality, Factory, Updater } from "../../../functions.js";
import { StreamableLike } from "../../../streaming.js";

import Streamable_createActionReducer from "./Streamable.createActionReducer.js";

const updateReducer = <T>(acc: T, updater: Updater<T>) => updater(acc);

const Streamable_createStateStore = <T>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<Updater<T>, T> =>
  Streamable_createActionReducer(updateReducer, initialState, options);

export default Streamable_createStateStore;
