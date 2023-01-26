import { Equality, Factory, Updater, updateReducer } from "../../../functions";
import { StreamableLike } from "../../../streaming";

import Streamable_createActionReducer from "./Streamable.createActionReducer";

const Streamable_createStateStore = <T>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<Updater<T>, T> =>
  Streamable_createActionReducer(updateReducer, initialState, options);

export default Streamable_createStateStore;
