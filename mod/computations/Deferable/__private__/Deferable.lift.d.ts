import { DeferableLike, SinkLike } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const Deferable_lift: <TA, TB>(operator: Function1<SinkLike<TB>, SinkLike<TA>>) => Function1<DeferableLike<TA>, DeferableLike<TB>>;
export default Deferable_lift;
