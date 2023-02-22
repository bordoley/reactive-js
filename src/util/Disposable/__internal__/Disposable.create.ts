import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { Factory } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";

const Disposable_create: Factory<DisposableLike> =
  /*@__PURE__*/ createInstanceFactory(Disposable_mixin);

export default Disposable_create;
