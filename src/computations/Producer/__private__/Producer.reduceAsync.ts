import { ProducerLike } from "../../../computations.js";
import { Factory, Reducer, compose, identity } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import Producer_actionReducer from "./Producer.actionReducer.js";
import Producer_lastAsync from "./Producer.lastAsync.js";

const Producer_reduceAsync: Producer.Signature["reduceAsync"] = (<T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  compose(
    identity<ProducerLike<T>>,
    Producer_actionReducer(reducer, initialValue),
    Producer_lastAsync(),
  )) as Producer.Signature["reduceAsync"];

export default Producer_reduceAsync;
