/// <reference types="./Producer.lastAsync.d.ts" />

import { SourceLike_subscribe } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import Iterable_first from "../../Iterable/__private__/Iterable.first.js";
const Producer_lastAsync = () => async (producer) => {
    const consumer = Consumer.createDropOldestWithoutBackpressure(1);
    producer[SourceLike_subscribe](consumer);
    await DisposableContainer.toPromise(consumer);
    return pipe(consumer, Iterable_first());
};
export default Producer_lastAsync;
