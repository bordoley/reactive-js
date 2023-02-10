import { createInstanceFactory } from "../../../__internal__/mixins";
import { Factory } from "../../../functions";
import { DisposableLike } from "../../../util";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";

const Disposable_create: Factory<DisposableLike> =
  /*@__PURE__*/ createInstanceFactory(Disposable_mixin);

export default Disposable_create;
