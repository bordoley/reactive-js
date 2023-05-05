import { Mixin1, mix, props } from "../../../__internal__/mixins.js";
import { __DelegatingPauseableMixin_delegate } from "../../../__internal__/symbols.js";
import { Function2, none, unsafeCast } from "../../../functions.js";
import {
  PauseableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../../../util.js";

const Pauseable_delegatingMixin: Mixin1<PauseableLike, PauseableLike> =
  /*@__PURE__*/ (() => {
    type TProperties = {
      [__DelegatingPauseableMixin_delegate]: PauseableLike;
    };

    return mix<
      Function2<PauseableLike & TProperties, PauseableLike, PauseableLike>,
      ReturnType<typeof props<TProperties>>,
      PauseableLike
    >(
      function DelegatingSchedulerImplementationMixin(
        instance: PauseableLike & TProperties,
        delegate: PauseableLike,
      ): PauseableLike {
        instance[__DelegatingPauseableMixin_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [__DelegatingPauseableMixin_delegate]: none,
      }),
      {
        get [PauseableLike_isPaused]() {
          unsafeCast<TProperties>(this);
          return this[__DelegatingPauseableMixin_delegate][
            PauseableLike_isPaused
          ];
        },
        [PauseableLike_pause](this: TProperties): void {
          this[__DelegatingPauseableMixin_delegate][PauseableLike_pause]();
        },
        [PauseableLike_resume](this: TProperties): void {
          this[__DelegatingPauseableMixin_delegate][PauseableLike_resume]();
        },
      },
    );
  })();

export default Pauseable_delegatingMixin;
