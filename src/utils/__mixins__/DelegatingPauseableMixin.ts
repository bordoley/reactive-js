import {
  Mixin1,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { none } from "../../functions.js";
import {
  DisposableContainerLike,
  PauseableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../../utils.js";

type TReturn = Omit<PauseableLike, keyof DisposableContainerLike>;
type TPrototype = TReturn;

const DelegatingPauseableMixin: Mixin1<TReturn, TPrototype> =
  /*@__PURE__*/ (() => {
    const DelegatingPauseableMixin_delegate = Symbol(
      "DelegatingPauseableMixin_delegate",
    );
    type TProperties = {
      [DelegatingPauseableMixin_delegate]: PauseableLike;
    };

    return mix(
      function DelegatingPauseableMixin(
        this: TProperties & TPrototype,
        delegate: PauseableLike,
      ): TReturn {
        this[DelegatingPauseableMixin_delegate] = delegate;

        return this;
      },
      props<TProperties>({
        [DelegatingPauseableMixin_delegate]: none,
      }),
      proto<TPrototype>({
        get [PauseableLike_isPaused]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingPauseableMixin_delegate][
            PauseableLike_isPaused
          ];
        },

        [PauseableLike_pause](this: TProperties) {
          this[DelegatingPauseableMixin_delegate][PauseableLike_pause]();
        },

        [PauseableLike_resume](this: TProperties) {
          this[DelegatingPauseableMixin_delegate][PauseableLike_resume]();
        },
      }),
    );
  })();

export default DelegatingPauseableMixin;
