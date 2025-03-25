import { ProducerLike, SourceLike_subscribe } from "../../../computations.js";
import { returns } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import type * as Producer from "../../Producer.js";

const Producer_toReadonlyArrayAsync: Producer.Signature["toReadonlyArrayAsync"] =
  /*@__PURE__*/ returns(async (producer: ProducerLike) => {
    const consumer = Consumer.create();
    producer[SourceLike_subscribe](consumer);
    await DisposableContainer.toPromise(consumer);

    return Array.from(consumer);
  }) as Producer.Signature["toReadonlyArrayAsync"];
export default Producer_toReadonlyArrayAsync;
