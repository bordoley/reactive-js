import { Equality, Factory, Reducer } from "../../../functions.js";
import * as Producer from "../../Producer.js";
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

      Producer.actionReducer<TAction, T>(reducer, initialState, options),


  );

export default Streamable_actionReducer;
