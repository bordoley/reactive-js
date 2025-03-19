import { RunnableLike } from "../../../computations.js";
import { Factory, Reducer, compose, identity } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_actionReducer from "./Runnable.actionReducer.js";
import Runnable_lastAsync from "./Runnable.lastAsync.js";

const Runnable_reduce: Runnable.Signature["reduce"] = (<T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  compose(
    identity<RunnableLike<T>>,
    Runnable_actionReducer(reducer, initialValue),
    Runnable_lastAsync(),
  )) as Runnable.Signature["reduce"];

export default Runnable_reduce;
