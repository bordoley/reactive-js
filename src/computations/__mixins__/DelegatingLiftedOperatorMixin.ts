import { Mixin1, mix, props, proto } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { DisposableLike } from "../../utils.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_complete,
  LiftedOperatorLike_isCompleted,
  LiftedOperatorLike_notify,
  LiftedOperatorLike_subscription,
} from "../__internal__/LiftedSource.js";

export const DelegatingLiftedOperatorLike_delegate = Symbol(
  "DelegatingLiftedOperatorLike_delegate",
);

export const DelegatingLiftedOperatorLike_onCompleted = Symbol(
  "DelegatingLiftedOperatorLike_onCompleted",
);

export interface DelegatingLiftedOperatorLike<
  TSubscription extends DisposableLike,
  TA,
  TB = TA,
> extends LiftedOperatorLike<TSubscription, TA> {
  readonly [DelegatingLiftedOperatorLike_delegate]: LiftedOperatorLike<
    TSubscription,
    TB
  >;

  [DelegatingLiftedOperatorLike_onCompleted](): void;
}

type TPrototype<TSubscription extends DisposableLike, TA, TB = TA> = Pick<
  DelegatingLiftedOperatorLike<TSubscription, TA, TB>,
  | typeof LiftedOperatorLike_notify
  | typeof LiftedOperatorLike_complete
  | typeof DelegatingLiftedOperatorLike_onCompleted
>;

interface DelegatingLiftedOperatorMixin {
  <TSubscription extends DisposableLike, TA, TB>(): Mixin1<
    DelegatingLiftedOperatorLike<TSubscription, TA, TB>,
    LiftedOperatorLike<TSubscription, TB>,
    TPrototype<TSubscription, TA>
  >;

  <TSubscription extends DisposableLike, T>(): Mixin1<
    DelegatingLiftedOperatorLike<TSubscription, T>,
    LiftedOperatorLike<TSubscription, T>,
    TPrototype<TSubscription, T>
  >;
}

const DelegatingLiftedOperatorMixin: DelegatingLiftedOperatorMixin =
  /*@__PURE__*/ (<TSubscription extends DisposableLike, TA, TB>() => {
    type TProperties = {
      [DelegatingLiftedOperatorLike_delegate]: LiftedOperatorLike<
        TSubscription,
        TB
      >;
      [LiftedOperatorLike_isCompleted]: boolean;
      [LiftedOperatorLike_subscription]: TSubscription;
    };

    return returns(
      mix(
        function DelegatingLiftedOperatorMixin(
          this: TProperties & TPrototype<TSubscription, TA, TB>,
          delegate: LiftedOperatorLike<TSubscription, TB>,
        ): DelegatingLiftedOperatorLike<TSubscription, TA, TB> {
          this[DelegatingLiftedOperatorLike_delegate] = delegate;
          this[LiftedOperatorLike_subscription] =
            delegate[LiftedOperatorLike_subscription];

          return this;
        },
        props<TProperties>({
          [DelegatingLiftedOperatorLike_delegate]: none,
          [LiftedOperatorLike_isCompleted]: false,
          [LiftedOperatorLike_subscription]: none,
        }),
        proto<TPrototype<TSubscription, TA>>({
          [DelegatingLiftedOperatorLike_onCompleted](this: TProperties) {
            this[DelegatingLiftedOperatorLike_delegate][
              LiftedOperatorLike_complete
            ]();
          },

          [LiftedOperatorLike_notify](this: TProperties, next: TA) {
            this[DelegatingLiftedOperatorLike_delegate][
              LiftedOperatorLike_notify
            ](next as unknown as TB);
          },

          [LiftedOperatorLike_complete](
            this: TProperties & TPrototype<TSubscription, TA, TB>,
          ) {
            this[LiftedOperatorLike_isCompleted] = true;
            this[DelegatingLiftedOperatorLike_onCompleted]();
          },
        }),
      ),
    );
  })();

export default DelegatingLiftedOperatorMixin;
