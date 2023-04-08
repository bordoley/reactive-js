import {
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
  Function6,
  Optional,
  isFunction,
  none,
  pipe,
  returns,
} from "../functions.js";
import ReadonlyArray_getLength from "../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import * as Obj from "./Object.js";
import { __DEV__ } from "./constants.js";
import {
  __DelegatingLike_delegate as DelegatingLike_delegate,
  __Object_init,
  __Object_private_initializedProperties,
  __Object_properties,
  __Object_prototype,
} from "./symbols.js";

export { DelegatingLike_delegate };

type OptionalProperties<T> = T extends object
  ? {
      [P in keyof T]: Optional<T[P]>;
    }
  : T;

export type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key];
};

export type PartialMixin = {
  [__Object_properties]: object;
  [__Object_prototype]: object;
};

export interface MixinAny<TReturn> extends PartialMixin {
  [__Object_init]: (instance: unknown, ...args: readonly any[]) => TReturn;
}

export interface Mixin<TReturn, TPrototype extends object = object>
  extends PartialMixin {
  [__Object_init](instance: unknown): TReturn;
  [__Object_prototype]: TPrototype;
}

export interface Mixin1<TReturn, TA, TPrototype extends object = object>
  extends PartialMixin {
  [__Object_init](instance: unknown, a: TA): TReturn;
  [__Object_prototype]: TPrototype;
}

export interface Mixin2<TReturn, TA, TB, TPrototype extends object = object>
  extends PartialMixin {
  [__Object_init](instance: unknown, a: TA, b: TB): TReturn;
  [__Object_prototype]: TPrototype;
}

export interface Mixin3<TReturn, TA, TB, TC, TPrototype extends object = object>
  extends PartialMixin {
  [__Object_init](instance: unknown, a: TA, b: TB, c: TC): TReturn;
  [__Object_prototype]: TPrototype;
}

export interface Mixin4<
  TReturn,
  TA,
  TB,
  TC,
  TD,
  TPrototype extends object = object,
> extends PartialMixin {
  [__Object_init](instance: unknown, a: TA, b: TB, c: TC, d: TD): TReturn;
  [__Object_prototype]: TPrototype;
}
export interface Mixin5<
  TReturn,
  TA,
  TB,
  TC,
  TD,
  TE,
  TPrototype extends object = object,
> extends PartialMixin {
  [__Object_init](
    instance: unknown,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): TReturn;
  [__Object_prototype]: TPrototype;
}
export interface Mixin6<
  TReturn,
  TA,
  TB,
  TC,
  TD,
  TE,
  TF,
  TPrototype extends object = object,
> extends PartialMixin {
  [__Object_init](
    instance: unknown,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
  ): TReturn;
  [__Object_prototype]: TPrototype;
}

function initUnsafe<TReturn>(
  mixin: MixinAny<TReturn>,
  instance: unknown,
  ...args: readonly unknown[]
): asserts instance is TReturn {
  const f = mixin[__Object_init];
  f(instance, ...args);
}

interface Init {
  init<TReturn>(
    mixin: Mixin<TReturn>,
    instance: unknown,
  ): asserts instance is TReturn;

  init<TReturn, TA>(
    mixin: Mixin1<TReturn, TA>,
    instance: unknown,
    a: TA,
  ): asserts instance is TReturn;

  init<TReturn, TA, TB>(
    mixin: Mixin2<TReturn, TA, TB>,
    instance: unknown,
    a: TA,
    b: TB,
  ): asserts instance is TReturn;

  init<TReturn, TA, TB, TC>(
    mixin: Mixin3<TReturn, TA, TB, TC>,
    instance: unknown,
    a: TA,
    b: TB,
    c: TC,
  ): asserts instance is TReturn;

  init<TReturn, TA, TB, TC, TD>(
    mixin: Mixin4<TReturn, TA, TB, TC, TD>,
    instance: unknown,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): asserts instance is TReturn;

  init<TReturn, TA, TB, TC, TD, TE>(
    mixin: Mixin5<TReturn, TA, TB, TC, TD, TE>,
    instance: unknown,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): asserts instance is TReturn;

  init<TReturn, TA, TB, TC, TD, TE, TF>(
    mixin: Mixin6<TReturn, TA, TB, TC, TD, TE, TF>,
    instance: unknown,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
  ): asserts instance is TReturn;
}
export const init: Init["init"] = initUnsafe;

export const include: (
  m0: PartialMixin,
  ...tail: readonly PartialMixin[]
) => PartialMixin = (...mixins: readonly PartialMixin[]) => {
  const length = ReadonlyArray_getLength(mixins);
  if (length == 1) {
    return mixins[0];
  } else {
    let propertyDescriptions = {};
    let prototypeDescriptions = {};

    for (let i = 0; i < length; i++) {
      const mixin = mixins[i];
      propertyDescriptions = {
        ...propertyDescriptions,
        ...Obj.getOwnPropertyDescriptors(mixin[__Object_properties]),
      };
      prototypeDescriptions = {
        ...prototypeDescriptions,
        ...Obj.getOwnPropertyDescriptors(mixin[__Object_prototype]),
      };
    }

    return {
      [__Object_properties]: Obj.create(Obj.prototype, propertyDescriptions),
      [__Object_prototype]: Obj.create(Obj.prototype, prototypeDescriptions),
    };
  }
};

interface CreateMixin {
  create<
    TInit extends (
      instance: TPrototype & Mutable<TProperties>,
      ...args: readonly any[]
    ) => unknown,
    TProperties extends {
      [__Object_private_initializedProperties]?: true;
    },
    TPrototype extends object,
  >(
    init: TInit,
    properties: TProperties,
    prototype: TPrototype,
  ): PartialMixin & {
    [__Object_init]: typeof init;
    [__Object_prototype]: TPrototype;
  };

  create<
    TInit extends (
      instance: TPrototype & Mutable<TProperties>,
      ...args: readonly any[]
    ) => unknown,
    TProperties extends {
      [__Object_private_initializedProperties]?: true;
    },
    TPrototype extends object,
  >(
    parent: PartialMixin,
    init: TInit,
    properties: TProperties,
    prototype: TPrototype,
  ): PartialMixin & {
    [__Object_init]: TInit;
    [__Object_prototype]: TPrototype;
  };

  create<TInit extends (instance: unknown, ...args: readonly any[]) => unknown>(
    parent: PartialMixin,
    init: TInit,
  ): PartialMixin & {
    [__Object_init]: TInit;
  };
}
export const mix: CreateMixin["create"] = ((
  initOrParent: any,
  propertiesOrInit: any,
  prototypeOrParent?: any,
  nothingOrPrototype?: any,
) => {
  if (isFunction(initOrParent)) {
    return {
      [__Object_init]: initOrParent,
      [__Object_properties]: propertiesOrInit ?? {},
      [__Object_prototype]: prototypeOrParent ?? {},
    };
  } else {
    const base = include(initOrParent, {
      [__Object_properties]: prototypeOrParent ?? {},
      [__Object_prototype]: nothingOrPrototype ?? {},
    });
    return {
      ...base,
      [__Object_init]: propertiesOrInit,
    };
  }
}) as CreateMixin["create"];

interface CreateInstanceFactory {
  createInstanceFactory<TReturn>(mixin: Mixin<TReturn>): Factory<TReturn>;

  createInstanceFactory<TReturn, TA>(
    mixin: Mixin1<TReturn, TA>,
  ): Function1<TA, TReturn>;

  createInstanceFactory<TReturn, TA, TB>(
    mixin: Mixin2<TReturn, TA, TB>,
  ): Function2<TA, TB, TReturn>;

  createInstanceFactory<TReturn, TA, TB, TC>(
    mixin: Mixin3<TReturn, TA, TB, TC>,
  ): Function3<TA, TB, TC, TReturn>;

  createInstanceFactory<TReturn, TA, TB, TC, TD>(
    mixin: Mixin4<TReturn, TA, TB, TC, TD>,
  ): Function4<TA, TB, TC, TD, TReturn>;

  createInstanceFactory<TReturn, TA, TB, TC, TD, TE>(
    mixin: Mixin5<TReturn, TA, TB, TC, TD, TE>,
  ): Function5<TA, TB, TC, TD, TE, TReturn>;

  createInstanceFactory<TReturn, TA, TB, TC, TD, TE, TF>(
    mixin: Mixin6<TReturn, TA, TB, TC, TD, TE, TF>,
  ): Function6<TA, TB, TC, TD, TE, TF, TReturn>;
}
export const createInstanceFactory: CreateInstanceFactory["createInstanceFactory"] =
  <TReturn>(mixin: MixinAny<TReturn>): Factory<TReturn> => {
    const propertyDescription = Obj.getOwnPropertyDescriptors(
      mixin[__Object_properties],
    );

    const prototypeDescription = __DEV__
      ? {
          ...Obj.getOwnPropertyDescriptors(mixin[__Object_prototype]),
          constructor: {
            configurable: true,
            enumerable: false,
            value: mixin[__Object_init],
            writable: true,
          },
        }
      : Obj.getOwnPropertyDescriptors(mixin[__Object_prototype]);

    const prototype = Obj.create(Obj.prototype, prototypeDescription);

    return (...args: readonly any[]) => {
      const instance: unknown = Obj.create(prototype, propertyDescription);
      initUnsafe(mixin, instance, ...args);
      return instance;
    };
  };

export const props = <TProperties>(
  o: OptionalProperties<TProperties>,
): TProperties & {
  [__Object_private_initializedProperties]?: true;
} => {
  return o as unknown as TProperties & {
    [__Object_private_initializedProperties]?: true;
  };
};

export interface DelegatingLike<T> {
  readonly [DelegatingLike_delegate]: T;
}

export const delegatingMixin: <TDelegate>() => Mixin1<
  DelegatingLike<TDelegate>,
  TDelegate
> = /*@__PURE__*/ (<TDelegate>() => {
  type TProperties = {
    readonly [DelegatingLike_delegate]: TDelegate;
  };

  return pipe(
    mix(
      function DelegatingDisposableMixin(
        instance: Mutable<TProperties>,
        delegate: TDelegate,
      ): DelegatingLike<TDelegate> {
        instance[DelegatingLike_delegate] = delegate;
        return instance;
      },
      props<TProperties>({
        [DelegatingLike_delegate]: none,
      }),
      {},
    ),
    returns,
  );
})();

export type MixinPrototype<TPrototype> = {
  [__Object_prototype]: TPrototype;
};

export const getPrototype = <TPrototype>(
  mixin: MixinPrototype<TPrototype>,
): TPrototype => mixin[__Object_prototype];
