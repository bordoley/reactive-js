import { Mixin1, mix, props, proto } from "../../__internal__/mixins.js";
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

export const DelegatingLiftedOperatorLike_onCompleted = Symbol(
  "DelegatingLiftedOperatorLike_onCompleted",
);

export interface DelegatingLiftedOperatorLike<TA, TB = TA>
  extends LiftedOperatorLike<TA> {
  readonly [DelegatingLiftedOperatorLike_delegate]: LiftedOperatorLike<TB>;

  [DelegatingLiftedOperatorLike_onCompleted](): void;
}

type TPrototype<TA, TB = TA> = Pick<
  DelegatingLiftedOperatorLike<TA, TB>,
  | typeof LiftedOperatorLike_notify
  | typeof LiftedOperatorLike_complete
  | typeof DelegatingLiftedOperatorLike_onCompleted
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
      [LiftedOperatorLike_isCompleted]: boolean;
    };

    return returns(
      mix(
        function DelegatingLiftedOperatorMixin(
          this: TProperties & TPrototype<TA, TB>,
          delegate: LiftedOperatorLike<TB>,
        ): DelegatingLiftedOperatorLike<TA, TB> {
          this[DelegatingLiftedOperatorLike_delegate] = delegate;

          return this;
        },
        props<TProperties>({
          [DelegatingLiftedOperatorLike_delegate]: none,
          [LiftedOperatorLike_isCompleted]: false,
        }),
        proto<TPrototype<TA>>({
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
            this: TProperties & TPrototype<TA, TB>,
          ) {
            this[LiftedOperatorLike_isCompleted] = true;
            this[DelegatingLiftedOperatorLike_onCompleted]();
          },
        }),
      ),
    );
  })();

export default DelegatingLiftedOperatorMixin;
