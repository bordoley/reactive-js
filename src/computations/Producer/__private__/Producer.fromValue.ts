import type * as Producer from "../../Producer.js";
import { Producer_genPure } from "./Producer.gen.js";

const Producer_fromValue: Producer.Signature["fromValue"] =
  <T>(options?: { autoDispose?: boolean }) =>
  (v: T) =>
    Producer_genPure(function* ProducerFromValue() {
      yield v;
    }, options);

export default Producer_fromValue;
