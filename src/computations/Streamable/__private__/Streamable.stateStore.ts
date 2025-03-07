import { Equality, Factory, Updater } from "../../../functions.js";
import type * as Streamable from "../../Streamable.js";
import Streamable_actionReducer from "./Streamable.actionReducer.js";

const updateReducer = <T>(acc: T, updater: Updater<T>) => updater(acc);

const Streamable_stateStore: Streamable.Signature["stateStore"] = <T>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
) =>
  Streamable_actionReducer<Updater<T>, T>(updateReducer, initialState, options);

export default Streamable_stateStore;
