import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { DisposableLike } from "../../../core.js";
import Disposable_mixin from "../../../core/Disposable/__internal__/Disposable.mixin.js";
import { Factory } from "../../../functions.js";

const Disposable_create: Factory<DisposableLike> =
  /*@__PURE__*/ createInstanceFactory(Disposable_mixin);

export default Disposable_create;
