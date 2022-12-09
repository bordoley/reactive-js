import { createInstanceFactory } from "../../../__internal__/mixins";
import { disposableMixin } from "../../../__internal__/util/DisposableLike.mixins";
import { Factory } from "../../../functions";
import { DisposableLike } from "../../../util";

export const create: Factory<DisposableLike> =
  /*@__PURE__*/ createInstanceFactory(disposableMixin);
