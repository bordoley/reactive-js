import { Mixin1, mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { none } from "../../functions.js";
import {
  DisposableContainerLike,
  PauseableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../../utils.js";

const DelegatingPauseableMixin: Mixin1<
  PauseableLike,
  PauseableLike,
  DisposableContainerLike
> = /*@__PURE__*/ (() => {
  const DelegatingPauseableMixin_delegate = Symbol(
    "DelegatingPauseableMixin_delegate",
  );
  type TProperties = {
    [DelegatingPauseableMixin_delegate]: PauseableLike;
  };

  return mix<
    PauseableLike,
    TProperties,
    Pick<
      PauseableLike,
      | typeof PauseableLike_isPaused
      | typeof PauseableLike_pause
      | typeof PauseableLike_resume
    >,
    DisposableContainerLike &
      TProperties &
      Pick<
        PauseableLike,
        | typeof PauseableLike_isPaused
        | typeof PauseableLike_pause
        | typeof PauseableLike_resume
      >,
    PauseableLike
  >(
    function DelegatingPauseableMixin(
      instance: TProperties & PauseableLike,
      delegate: PauseableLike,
    ): PauseableLike {
      instance[DelegatingPauseableMixin_delegate] = delegate;

      return instance;
    },
    props<TProperties>({
      [DelegatingPauseableMixin_delegate]: none,
    }),
    {
      get [PauseableLike_isPaused]() {
        unsafeCast<TProperties>(this);
        return this[DelegatingPauseableMixin_delegate][PauseableLike_isPaused];
      },

      [PauseableLike_pause](this: TProperties) {
        this[DelegatingPauseableMixin_delegate][PauseableLike_pause]();
      },

      [PauseableLike_resume](this: TProperties) {
        this[DelegatingPauseableMixin_delegate][PauseableLike_resume]();
      },
    },
  );
})();

export default DelegatingPauseableMixin;
