import { createInstanceFactory } from "../../../__internal__/mixins";
import { Factory } from "../../../functions";
import { DisposableLike } from "../../../util";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";

const Disposable$create: Factory<DisposableLike> =
  /*@__PURE__*/ createInstanceFactory(Disposable$mixin);

export default Disposable$create;
