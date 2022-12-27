import { createInstanceFactory } from "../../../__internal__/mixins";
import { Factory } from "../../../functions";
import { DisposableLike } from "../../../util";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";

const create: Factory<DisposableLike> = /*@__PURE__*/ createInstanceFactory(
  DisposableLike__mixin,
);

export default create;
