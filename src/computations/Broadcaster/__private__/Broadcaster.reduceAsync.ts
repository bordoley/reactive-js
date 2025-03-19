import { Factory, Reducer, compose } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import Producer_reduceAsync from "../../Producer/__private__/Producer.reduceAsync.js";
import Broadcaster_toProducer from "./Broadcaster.toProducer.js";

const Broadcaster_reduceAsync: Broadcaster.Signature["reduceAsync"] = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  compose(
    Broadcaster_toProducer<T>(),
    Producer_reduceAsync(reducer, initialValue),
  );

export default Broadcaster_reduceAsync;
