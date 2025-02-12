import { __DEV__ } from "../../__internal__/constants.js";
import { Mixin1, mix, props } from "../../__internal__/mixins.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
} from "../../concurrent.js";
import { raiseIf } from "../../functions.js";

const ObservableMixin: Mixin1<
  Pick<
    ObservableLike,
    | typeof ObservableLike_isDeferred
    | typeof ObservableLike_isPure
    | typeof ObservableLike_isRunnable
  >,
  Pick<
    ObservableLike,
    | typeof ObservableLike_isDeferred
    | typeof ObservableLike_isPure
    | typeof ObservableLike_isRunnable
  >
> = /*@__PURE__*/ (() => {
  type TProperties = {
    [ObservableLike_isDeferred]: boolean;
    [ObservableLike_isPure]: boolean;
    [ObservableLike_isRunnable]: boolean;
  };

  return mix(
    function ObservableMixin(
      instance: TProperties,
      config: Pick<
        ObservableLike,
        | typeof ObservableLike_isDeferred
        | typeof ObservableLike_isPure
        | typeof ObservableLike_isRunnable
      >,
    ): Pick<
      ObservableLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    > {
      const configRunnable = config[ObservableLike_isRunnable];
      const configDeferred = config[ObservableLike_isDeferred];
      const configPure = config[ObservableLike_isPure];

      if (__DEV__) {
        const isValidRunnable = configRunnable && configDeferred;
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

      instance[ObservableLike_isRunnable] = configRunnable;
      instance[ObservableLike_isDeferred] = configDeferred;
      instance[ObservableLike_isPure] = configPure;

      return instance;
    },
    props<TProperties>({
      [ObservableLike_isDeferred]: false,
      [ObservableLike_isPure]: false,
      [ObservableLike_isRunnable]: false,
    }),
    {},
  );
})();

export default ObservableMixin;
