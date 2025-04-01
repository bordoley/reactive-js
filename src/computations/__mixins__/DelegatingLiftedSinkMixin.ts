import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import { DelegatingEventListenerLike_delegate } from "../../utils/__mixins__/DelegatingEventListenerMixin.js";
import DelegatingSinkMixin, {
  DelegatingSinkLike,
} from "../../utils/__mixins__/DelegatingSinkMixin.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../__internal__/LiftedSource.js";

export const DelegatingLiftedSinkLike_onCompleted = Symbol(
  "DelegatingLiftedSinkLike_onCompleted",
);

export interface DelegatingLiftedSinkLike<
  TSubscription extends SinkLike,
  TA,
  TB = TA,
> extends LiftedSinkLike<TSubscription, TA>,
    DelegatingSinkLike<TA, TB, LiftedSinkLike<TSubscription, TB>> {
  [DelegatingLiftedSinkLike_onCompleted](): void;
}

type TPrototype<TSubscription extends SinkLike, TA, TB = TA> = Pick<
  DelegatingLiftedSinkLike<TSubscription, TA, TB>,
  | typeof SinkLike_isCompleted
  | typeof SinkLike_complete
  | typeof DelegatingLiftedSinkLike_onCompleted
>;

interface DelegatingLiftedSinkMixin {
  <TSubscription extends SinkLike, TA, TB>(): Mixin1<
    DelegatingLiftedSinkLike<TSubscription, TA, TB>,
    LiftedSinkLike<TSubscription, TB>,
    TPrototype<TSubscription, TA>
  >;

  <TSubscription extends SinkLike, T>(): Mixin1<
    DelegatingLiftedSinkLike<TSubscription, T>,
    LiftedSinkLike<TSubscription, T>,
    TPrototype<TSubscription, T>
  >;
}

const DelegatingLiftedSinkMixin: DelegatingLiftedSinkMixin = /*@__PURE__*/ (<
  TSubscription extends SinkLike,
  TA,
  TB,
>() => {
  type TProperties = {
    [LiftedSinkLike_subscription]: TSubscription;
  };

  return returns(
    mix(
      include(DelegatingDisposableMixin, DelegatingSinkMixin()),
      function DelegatingLiftedSinkMixin(
        this: TProperties & TPrototype<TSubscription, TA, TB>,
        delegate: LiftedSinkLike<TSubscription, TB>,
      ): DelegatingLiftedSinkLike<TSubscription, TA, TB> {
        init(
          DelegatingSinkMixin<TA, TB, LiftedSinkLike<TSubscription, TB>>(),
          this,
          delegate,
        );

        this[LiftedSinkLike_subscription] =
          delegate[LiftedSinkLike_subscription];

        init(
          DelegatingDisposableMixin,
          this,
          delegate[LiftedSinkLike_subscription],
        );

        return this;
      },
      props<TProperties>({
        [LiftedSinkLike_subscription]: none,
      }),
      proto<TPrototype<TSubscription, TA>>({
        get [SinkLike_isCompleted]() {
          unsafeCast<TProperties>(this);
          return this[LiftedSinkLike_subscription][SinkLike_isCompleted];
        },

        [DelegatingLiftedSinkLike_onCompleted](this: TProperties) {},

        [SinkLike_complete](
          this: TProperties &
            TPrototype<TSubscription, TA, TB> &
            DelegatingLiftedSinkLike<TSubscription, TA, TB>,
        ) {
          const isCompleted = this[SinkLike_isCompleted];

          if (!isCompleted) {
            const delegate = this[DelegatingEventListenerLike_delegate];
            this[DelegatingLiftedSinkLike_onCompleted]();
            delegate[SinkLike_complete]();
          }
        },
      }),
    ),
  );
})();

export default DelegatingLiftedSinkMixin;
