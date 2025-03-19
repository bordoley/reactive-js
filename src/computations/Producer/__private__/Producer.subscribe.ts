import { ProducerLike, SourceLike_subscribe } from "../../../computations.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as Producer from "../../Producer.js";

const Producer_subscribe: Producer.Signature["subscribe"] =
  <T>() =>
  (observable: ProducerLike<T>) => {
    const observer = Consumer.createDropOldestWithoutBackpressure(0);
    observable[SourceLike_subscribe](observer);
    return observer;
  };

export default Producer_subscribe;
