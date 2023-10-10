import { Equality, Factory, Updater } from "../../../functions.js";
import Observable_stateStore from "../../Observable/__internal__/Observable.stateStore.js";
import type * as Streamable from "../../Streamable.js";
import Streamable_create from "./Streamable.create.js";

const Streamable_createStateStore: Streamable.Signature["createStateStore"] = <
  T,
>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
) =>
  Streamable_create<Updater<T>, T>(
    Observable_stateStore(initialState, options),
  );

export default Streamable_createStateStore;
