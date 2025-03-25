import {
  Mixin1,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_complete,
  LiftedOperatorLike_isCompleted,
  LiftedOperatorLike_notify,
} from "../__internal__/LiftedSource.js";

export const DelegatingLiftedOperatorLike_delegate = Symbol(
  "DelegatingLiftedOperatorLike_delegate",
);

export interface DelegatingLiftedOperatorLike<TA, TB = TA>
  extends LiftedOperatorLike<TA> {
  readonly [DelegatingLiftedOperatorLike_delegate]: LiftedOperatorLike<TB>;
}

type TPrototype<TA> = Pick<
  LiftedOperatorLike<TA>,
  | typeof LiftedOperatorLike_isCompleted
  | typeof LiftedOperatorLike_notify
  | typeof LiftedOperatorLike_complete
>;

interface DelegatingLiftedOperatorMixin {
  <TA, TB>(): Mixin1<
    DelegatingLiftedOperatorLike<TA, TB>,
    LiftedOperatorLike<TB>,
    TPrototype<TA>
  >;

  <T>(): Mixin1<
    DelegatingLiftedOperatorLike<T>,
    LiftedOperatorLike<T>,
    TPrototype<T>
  >;
}

const DelegatingLiftedOperatorMixin: DelegatingLiftedOperatorMixin =
  /*@__PURE__*/ (<TA, TB>() => {
    type TProperties = {
      [DelegatingLiftedOperatorLike_delegate]: LiftedOperatorLike<TB>;
    };

    return returns(
      mix(
        function LiftedOperatorMixin(
          this: TProperties & TPrototype<TA>,
          delegate: LiftedOperatorLike<TB>,
        ): DelegatingLiftedOperatorLike<TA, TB> {
          this[DelegatingLiftedOperatorLike_delegate] = delegate;

          return this;
        },
        props<TProperties>({
          [DelegatingLiftedOperatorLike_delegate]: none,
        }),
        proto<TPrototype<TA>>({
          get [LiftedOperatorLike_isCompleted]() {
            unsafeCast<TProperties>(this);
            return this[DelegatingLiftedOperatorLike_delegate][
              LiftedOperatorLike_isCompleted
            ];
          },

          [LiftedOperatorLike_notify](this: TProperties, next: TA) {
            this[DelegatingLiftedOperatorLike_delegate][
              LiftedOperatorLike_notify
            ](next as unknown as TB);
          },

          [LiftedOperatorLike_complete](this: TProperties) {
            this[DelegatingLiftedOperatorLike_delegate][
              LiftedOperatorLike_complete
            ]();
          },
        }),
      ),
    );
  })();

export default DelegatingLiftedOperatorMixin;
