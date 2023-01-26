import { Equality, Factory, Updater, updateReducer } from "../../../functions";
import { StreamableLike } from "../../../streaming";

import Streamable$createActionReducer from "./Streamable.createActionReducer";

const Streamable$createStateStore = <T>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<Updater<T>, T> =>
  Streamable$createActionReducer(updateReducer, initialState, options);

export default Streamable$createStateStore;
