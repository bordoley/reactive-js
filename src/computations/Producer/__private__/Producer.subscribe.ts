import { ComputationOf, SourceLike_subscribe } from "../../../computations.js";
import { invoke, pipe, returns } from "../../../functions.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import type * as Producer from "../../Producer.js";

const Producer_subscribe: Producer.Signature["subscribe"] =
  /*@__PURE__*/ returns(
    (producer: ComputationOf<Producer.Computation, any>) => {
      const consumer = Consumer.takeLast(0);
      pipe(producer, invoke(SourceLike_subscribe, consumer));
      return consumer;
    },
  );

export default Producer_subscribe;
