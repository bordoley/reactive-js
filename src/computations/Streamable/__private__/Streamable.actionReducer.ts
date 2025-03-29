import { Equality, Factory, Reducer } from "../../../functions.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import Streamable_create from "./Streamable.create.js";

const Streamable_actionReducer: Streamable.Signature["actionReducer"] = <
  TAction,
  T,
>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
) =>
  Streamable_create<TAction, T>(
    Observable.scanDistinct<TAction, T>(reducer, initialState, options),
  );

export default Streamable_actionReducer;
