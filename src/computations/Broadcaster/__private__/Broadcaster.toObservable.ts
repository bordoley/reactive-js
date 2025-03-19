import { compose, returns } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import Producer_toObservable from "../../Producer/__private__/Producer.toObservable.js";
import Broadcaster_toProducer from "./Broadcaster.toProducer.js";

const Broadcaster_toObservable: Broadcaster.Signature["toObservable"] = (<
  T,
>() =>
  compose(
    Broadcaster_toProducer<T>(),
    Producer_toObservable<T>(),
    returns,
  ))() as Broadcaster.Signature["toObservable"];

export default Broadcaster_toObservable;
