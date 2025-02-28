import { __DEV__ } from "../../__internal__/constants.js";
import { Mixin1, mix, props } from "../../__internal__/mixins.js";
import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../computations.js";
import { ObservableLike, ObservableLike_isDeferred } from "../../concurrent.js";
import { raiseIf } from "../../functions.js";

const ObservableMixin: Mixin1<
  Pick<
    ObservableLike,
    | typeof ObservableLike_isDeferred
    | typeof ComputationLike_isPure
    | typeof ComputationLike_isSynchronous
  >,
  Pick<
    ObservableLike,
    | typeof ObservableLike_isDeferred
    | typeof ComputationLike_isPure
    | typeof ComputationLike_isSynchronous
  >
> = /*@__PURE__*/ (() => {
  type TProperties = {
    [ObservableLike_isDeferred]: boolean;
    [ComputationLike_isPure]: boolean;
    [ComputationLike_isSynchronous]: boolean;
  };

  return mix(
    function ObservableMixin(
      instance: TProperties,
      config: Pick<
        ObservableLike,
        | typeof ObservableLike_isDeferred
        | typeof ComputationLike_isPure
        | typeof ComputationLike_isSynchronous
      >,
    ): Pick<
      ObservableLike,
      | typeof ObservableLike_isDeferred
      | typeof ComputationLike_isPure
      | typeof ComputationLike_isSynchronous
    > {
      const configRunnable = config[ComputationLike_isSynchronous];
      const configDeferred = config[ObservableLike_isDeferred];
      const configPure = config[ComputationLike_isPure];

      if (__DEV__) {
        const isValidRunnable = (configRunnable ?? true) && configDeferred;
        const isValidDeferred = configDeferred;
        const isValidMulticasted =
          configPure && !configDeferred && !configRunnable;

        raiseIf(
          !(isValidRunnable || isValidDeferred || isValidMulticasted),
          `Attempting to create an observable in an illegal state: ${JSON.stringify(
            {
              isDeferred: configDeferred,
              isPure: configPure,
              isRunnable: configRunnable,
            },
          )}`,
        );
      }

      instance[ComputationLike_isSynchronous] = configRunnable ?? true;
      instance[ObservableLike_isDeferred] = configDeferred;
      instance[ComputationLike_isPure] = configPure ?? true;

      return instance;
    },
    props<TProperties>({
      [ObservableLike_isDeferred]: false,
      [ComputationLike_isPure]: false,
      [ComputationLike_isSynchronous]: false,
    }),
    {},
  );
})();

export default ObservableMixin;
