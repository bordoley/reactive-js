/// <reference types="./Producer.toReadonlyArrayAsync.d.ts" />

import { SourceLike_subscribe } from "../../../computations.js";
import { returns } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
const Producer_toReadonlyArrayAsync = 
/*@__PURE__*/ returns(async (producer) => {
    const consumer = Consumer.create();
    producer[SourceLike_subscribe](consumer);
    await DisposableContainer.toPromise(consumer);
    return Array.from(consumer);
});
export default Producer_toReadonlyArrayAsync;
