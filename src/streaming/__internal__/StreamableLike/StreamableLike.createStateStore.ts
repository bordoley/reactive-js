import { Equality, Factory, Updater, updateReducer } from "../../../functions";
import { StreamableLike } from "../../../streaming";

import StreamableLike__createActionReducer from "./StreamableLike.createActionReducer";

const StreamableLike__createStateStore = <T>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<Updater<T>, T> =>
  StreamableLike__createActionReducer(updateReducer, initialState, options);

export default StreamableLike__createStateStore;
