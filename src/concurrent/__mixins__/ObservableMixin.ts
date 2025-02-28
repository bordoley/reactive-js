import { __DEV__ } from "../../__internal__/constants.js";
import { Mixin1, mix, props } from "../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../computations.js";
import { ObservableLike } from "../../concurrent.js";
import { raiseIf } from "../../functions.js";

const ObservableMixin: Mixin1<
  Pick<
    ObservableLike,
    | typeof ComputationLike_isDeferred
    | typeof ComputationLike_isPure
    | typeof ComputationLike_isSynchronous
  >,
  Pick<
    ObservableLike,
    | typeof ComputationLike_isDeferred
    | typeof ComputationLike_isPure
    | typeof ComputationLike_isSynchronous
  >
> = /*@__PURE__*/ (() => {
  type TProperties = {
    [ComputationLike_isDeferred]: boolean;
    [ComputationLike_isPure]: boolean;
    [ComputationLike_isSynchronous]: boolean;
  };

  return mix(
    function ObservableMixin(
      instance: TProperties,
      config: Pick<
        ObservableLike,
        | typeof ComputationLike_isDeferred
        | typeof ComputationLike_isPure
        | typeof ComputationLike_isSynchronous
      >,
    ): Pick<
      ObservableLike,
      | typeof ComputationLike_isDeferred
      | typeof ComputationLike_isPure
      | typeof ComputationLike_isSynchronous
    > {
      const configSynchronousObservable =
        config[ComputationLike_isSynchronous] ?? true;
      const configDeferred = config[ComputationLike_isDeferred] ?? true;
      const configPure = config[ComputationLike_isPure] ?? true;

      if (__DEV__) {
        const isValidSynchronousObservable =
          configSynchronousObservable && configDeferred;
        const isValidDeferred = configDeferred;
        const isValidMulticasted =
          configPure && !configDeferred && !configSynchronousObservable;

        raiseIf(
          !(
            isValidSynchronousObservable ||
            isValidDeferred ||
            isValidMulticasted
          ),
          `Attempting to create an observable in an illegal state: ${JSON.stringify(
            {
              isDeferred: configDeferred,
              isPure: configPure,
              isSynchronousObservable: configSynchronousObservable,
            },
          )}`,
        );
      }

      instance[ComputationLike_isSynchronous] =
        configSynchronousObservable ?? true;
      instance[ComputationLike_isDeferred] = configDeferred ?? true;
      instance[ComputationLike_isPure] = configPure ?? true;

      return instance;
    },
    props<TProperties>({
      [ComputationLike_isDeferred]: false,
      [ComputationLike_isPure]: false,
      [ComputationLike_isSynchronous]: false,
    }),
    {},
  );
})();

export default ObservableMixin;
