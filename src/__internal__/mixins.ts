import {
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
  Optional,
  isFunction,
  raiseIf,
} from "../functions.js";
import * as Obj from "./Object.js";
import { Array_length, __DEV__ } from "./constants.js";

export const Mixin_init = /*@__PURE__*/ Symbol("Mixin_init");
export const Mixin_private_initializedProperties = /*@__PURE__*/ Symbol(
  "Mixin_private_initializedProperties",
);
export const Mixin_properties = /*@__PURE__*/ Symbol("Mixin_properties");
export const Mixin_proto = /*@__PURE__*/ Symbol("Mixin_proto");
export const Mixin_protoDescription = /*@__PURE__*/ Symbol(
  "Mixin_protoDescription",
);

type OptionalProperties<T> = T extends object
  ? {
      [P in keyof T]: Optional<T[P]>;
    }
  : T;

export type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key];
};

export type PartialMixin<TPrototype extends object = object> = {
  [Mixin_properties]: object;
  [Mixin_proto]?: TPrototype;
  [Mixin_protoDescription]: { [x: string | symbol]: PropertyDescriptor };
};

export interface MixinAny<out TReturn, TInstance = unknown>
  extends PartialMixin {
  [Mixin_init]: (this: TInstance, ...args: readonly any[]) => TReturn;
}

export interface Mixin<
  out TReturn,
  TPrototype extends object = object,
  TInstance = unknown,
> extends PartialMixin<TPrototype> {
  [Mixin_init](this: TInstance & TPrototype): TReturn;
}

export interface Mixin1<
  out TReturn,
  TA,
  TPrototype extends object = object,
  TInstance = unknown,
> extends PartialMixin<TPrototype> {
  [Mixin_init](this: TInstance & TPrototype, a: TA): TReturn;
}

export interface Mixin2<
  out TReturn,
  TA,
  TB,
  TPrototype extends object = object,
  TInstance = unknown,
> extends PartialMixin<TPrototype> {
  [Mixin_init](this: TInstance & TPrototype, a: TA, b: TB): TReturn;
}

export interface Mixin3<
  out TReturn,
  TA,
  TB,
  TC,
  TPrototype extends object = object,
  TInstance = unknown,
> extends PartialMixin<TPrototype> {
  [Mixin_init](this: TInstance & TPrototype, a: TA, b: TB, c: TC): TReturn;
}

export interface Mixin4<
  out TReturn,
  TA,
  TB,
  TC,
  TD,
  TPrototype extends object = object,
  TInstance = unknown,
> extends PartialMixin<TPrototype> {
  [Mixin_init](
    this: TInstance & TPrototype,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): TReturn;
}
export interface Mixin5<
  out TReturn,
  TA,
  TB,
  TC,
  TD,
  TE,
  TPrototype extends object = object,
  TInstance = unknown,
> extends PartialMixin<TPrototype> {
  [Mixin_init](
    this: TInstance & TPrototype,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): TReturn;
}

export interface MixinDecorator {
  <TReturn>(mixin: Mixin<TReturn>): Mixin<TReturn>;

  <TReturn, TA>(mixin: Mixin1<TReturn, TA>): Mixin1<TReturn, TA>;

  <TReturn, TA, TB>(mixin: Mixin2<TReturn, TA, TB>): Mixin2<TReturn, TA, TB>;

  <TReturn, TA, TB, TC>(
    mixin: Mixin3<TReturn, TA, TB, TC>,
  ): Mixin3<TReturn, TA, TB, TC>;

  <TReturn, TA, TB, TC, TD>(
    mixin: Mixin4<TReturn, TA, TB, TC, TD>,
  ): Mixin4<TReturn, TA, TB, TC, TD>;

  <TReturn, TA, TB, TC, TD, TE>(
    mixin: Mixin5<TReturn, TA, TB, TC, TD, TE>,
  ): Mixin5<TReturn, TA, TB, TC, TD, TE>;
}

interface Signature {
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

  getProperty<
    TPrototype extends Record<TKey, any>,
    TKey extends keyof TPrototype,
  >(
    mixin: PartialMixin<TPrototype>,
    thiz: unknown,
    method: TKey,
  ): TPrototype[TKey];

  include<TM0 extends PartialMixin>(m0: TM0): TM0;
  include<TM0 extends PartialMixin, TM1 extends PartialMixin>(
    m0: TM0,
    m1: TM1,
  ): TM0 & TM1;
  include<
    TM0 extends PartialMixin,
    TM1 extends PartialMixin,
    TM2 extends PartialMixin,
  >(
    m0: TM0,
    m1: TM1,
    m2: TM2,
  ): TM0 & TM1 & TM2;
  include<
    TM0 extends PartialMixin,
    TM1 extends PartialMixin,
    TM2 extends PartialMixin,
    TM3 extends PartialMixin,
  >(
    m0: TM0,
    m1: TM1,
    m2: TM2,
    m3: TM3,
  ): TM0 & TM1 & TM2 & TM3;
  include<
    TM0 extends PartialMixin,
    TM1 extends PartialMixin,
    TM2 extends PartialMixin,
    TM3 extends PartialMixin,
    TM4 extends PartialMixin,
  >(
    m0: TM0,
    m1: TM1,
    m2: TM2,
    m3: TM3,
    m4: TM4,
  ): TM0 & TM1 & TM2 & TM3 & TM4;

  init<TReturn, TInstance>(
    mixin: Mixin<TReturn, {}, TInstance>,
    instance: TInstance,
  ): asserts instance is TInstance & TReturn;

  init<TReturn, TA, TInstance>(
    mixin: Mixin1<TReturn, TA, {}, TInstance>,
    instance: TInstance,
    a: TA,
  ): asserts instance is TInstance & TReturn;

  init<TReturn, TA, TB, TInstance>(
    mixin: Mixin2<TReturn, TA, TB, {}, TInstance>,
    instance: TInstance,
    a: TA,
    b: TB,
  ): asserts instance is TInstance & TReturn;

  init<TReturn, TA, TB, TC, TInstance>(
    mixin: Mixin3<TReturn, TA, TB, TC, {}, TInstance>,
    instance: TInstance,
    a: TA,
    b: TB,
    c: TC,
  ): asserts instance is TInstance & TReturn;

  init<TReturn, TA, TB, TC, TD, TInstance>(
    mixin: Mixin4<TReturn, TA, TB, TC, TD, {}, TInstance>,
    instance: TInstance,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): asserts instance is TInstance & TReturn;

  init<TReturn, TA, TB, TC, TD, TE, TInstance>(
    mixin: Mixin5<TReturn, TA, TB, TC, TD, TE, {}, TInstance>,
    instance: TInstance,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): asserts instance is TInstance & TReturn;

  mix<TReturn, TProperties, TPrototype extends object, TInstance>(
    init: (this: TPrototype & Mutable<TProperties> & TInstance) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): PartialMixin<TPrototype> & {
    [Mixin_init]: (this: TPrototype & TInstance) => TReturn;
  };

  mix<TReturn, TProperties, TPrototype extends object, TInstance, TA>(
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): PartialMixin<TPrototype> & {
    [Mixin_init]: (this: TPrototype & TInstance, a: TA) => TReturn;
  };

  mix<TReturn, TProperties, TPrototype extends object, TInstance, TA, TB>(
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): PartialMixin<TPrototype> & {
    [Mixin_init]: (this: TPrototype & TInstance, a: TA, b: TB) => TReturn;
  };

  mix<TReturn, TProperties, TPrototype extends object, TInstance, TA, TB, TC>(
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): PartialMixin<TPrototype> & {
    [Mixin_init]: (
      this: TPrototype & TInstance,
      a: TA,
      b: TB,
      c: TC,
    ) => TReturn;
  };

  mix<
    TReturn,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
    TB,
    TC,
    TD,
  >(
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): PartialMixin<TPrototype> & {
    [Mixin_init]: (
      this: TPrototype & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
    ) => TReturn;
  };

  mix<
    TReturn,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
    TB,
    TC,
    TD,
    TE,
  >(
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
      e: TE,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): PartialMixin<TPrototype> & {
    [Mixin_init]: (
      this: TPrototype & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
      e: TE,
    ) => TReturn;
  };

  mix<TReturn, TProperties, TInstance>(
    init: (this: Mutable<TProperties> & TInstance) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): PartialMixin & {
    [Mixin_init]: (this: TInstance) => TReturn;
  };

  mix<TReturn, TProperties, TInstance, TA>(
    init: (this: Mutable<TProperties> & TInstance, a: TA) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): PartialMixin & {
    [Mixin_init]: typeof init;
  };

  mix<TReturn, TProperties, TInstance, TA, TB>(
    init: (this: Mutable<TProperties> & TInstance, a: TA, b: TB) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): PartialMixin & {
    [Mixin_init]: (this: TInstance, a: TA, b: TB) => TReturn;
  };

  mix<TReturn, TProperties, TInstance, TA, TB, TC>(
    init: (
      this: Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): PartialMixin & {
    [Mixin_init]: (this: TInstance, a: TA, b: TB, c: TC) => TReturn;
  };

  mix<TReturn, TProperties, TInstance, TA, TB, TC, TD>(
    init: (
      this: Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): PartialMixin & {
    [Mixin_init]: (this: TInstance, a: TA, b: TB, c: TC, d: TD) => TReturn;
  };

  mix<TReturn, TProperties, TInstance, TA, TB, TC, TD, TE>(
    init: (
      this: Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
      e: TE,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): PartialMixin & {
    [Mixin_init]: (
      this: TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
      e: TE,
    ) => TReturn;
  };

  mix<TReturn, TInstance>(
    init: (this: TInstance) => TReturn,
  ): PartialMixin & {
    [Mixin_init]: (this: TInstance) => TReturn;
  };

  mix<TReturn, TInstance, TA>(
    init: (this: TInstance, a: TA) => TReturn,
  ): PartialMixin & {
    [Mixin_init]: (this: TInstance, a: TA) => TReturn;
  };

  mix<TReturn, TInstance, TA, TB>(
    init: (this: TInstance, a: TA, b: TB) => TReturn,
  ): PartialMixin & {
    [Mixin_init]: (this: TInstance, a: TA, b: TB) => TReturn;
  };

  mix<TReturn, TInstance, TA, TB, TC>(
    init: (this: TInstance, a: TA, b: TB, c: TC) => TReturn,
  ): PartialMixin & {
    [Mixin_init]: (this: TInstance, a: TA, b: TB, c: TC) => TReturn;
  };

  mix<TReturn, TInstance, TA, TB, TC, TD>(
    init: (this: TInstance, a: TA, b: TB, c: TC, d: TD) => TReturn,
  ): PartialMixin & {
    [Mixin_init]: (this: TInstance, a: TA, b: TB, c: TC, d: TD) => TReturn;
  };

  mix<TReturn, TInstance, TA, TB, TC, TD, TE>(
    init: (this: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE) => TReturn,
  ): PartialMixin & {
    [Mixin_init]: (
      this: TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
      e: TE,
    ) => TReturn;
  };

  mix<
    TReturn,
    TIncludes extends PartialMixin,
    TProperties,
    TPrototype extends object,
    TInstance,
  >(
    includes: TIncludes,
    init: (this: TPrototype & Mutable<TProperties> & TInstance) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): PartialMixin<TPrototype & NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (this: TPrototype & TInstance) => TReturn;
  };

  mix<
    TReturn,
    TIncludes extends PartialMixin,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
  >(
    includes: TIncludes,
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): PartialMixin<TPrototype & NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (this: TPrototype & TInstance, a: TA) => TReturn;
  };

  mix<
    TReturn,
    TIncludes extends PartialMixin,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
    TB,
  >(
    includes: PartialMixin,
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): PartialMixin<TPrototype & NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (this: TPrototype & TInstance, a: TA, b: TB) => TReturn;
  };

  mix<
    TReturn,
    TIncludes extends PartialMixin,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
    TB,
    TC,
  >(
    includes: TIncludes,
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): PartialMixin<TPrototype & NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (
      this: TPrototype & TInstance,
      a: TA,
      b: TB,
      c: TC,
    ) => TReturn;
  };

  mix<
    TReturn,
    TIncludes extends PartialMixin,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
    TB,
    TC,
    TD,
  >(
    includes: TIncludes,
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): PartialMixin<TPrototype & NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (
      this: TPrototype & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
    ) => TReturn;
  };

  mix<
    TReturn,
    TIncludes extends PartialMixin,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
    TB,
    TC,
    TD,
    TE,
  >(
    includes: TIncludes,
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
      e: TE,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): PartialMixin<TPrototype & NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (
      this: TPrototype & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
      e: TE,
    ) => TReturn;
  };

  mix<TReturn, TIncludes extends PartialMixin, TProperties, TInstance>(
    includes: TIncludes,
    init: (this: Mutable<TProperties> & TInstance) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): PartialMixin<NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (this: TInstance) => TReturn;
  };

  mix<TReturn, TIncludes extends PartialMixin, TProperties, TInstance, TA>(
    includes: TIncludes,
    init: (this: Mutable<TProperties> & TInstance, a: TA) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): PartialMixin<NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (this: TInstance, a: TA) => TReturn;
  };

  mix<TReturn, TIncludes extends PartialMixin, TProperties, TInstance, TA, TB>(
    includes: TIncludes,
    init: (this: Mutable<TProperties> & TInstance, a: TA, b: TB) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): PartialMixin<NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (this: TInstance, a: TA, b: TB) => TReturn;
  };

  mix<
    TReturn,
    TIncludes extends PartialMixin,
    TProperties,
    TInstance,
    TA,
    TB,
    TC,
  >(
    includes: TIncludes,
    init: (
      this: Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): PartialMixin<NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (this: TInstance, a: TA, b: TB, c: TC) => TReturn;
  };

  mix<
    TReturn,
    TIncludes extends PartialMixin,
    TProperties,
    TInstance,
    TA,
    TB,
    TC,
    TD,
  >(
    includes: TIncludes,
    init: (
      this: Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): PartialMixin<NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (this: TInstance, a: TA, b: TB, c: TC, d: TD) => TReturn;
  };

  mix<
    TReturn,
    TIncludes extends PartialMixin,
    TProperties,
    TInstance,
    TA,
    TB,
    TC,
    TD,
    TE,
  >(
    includes: TIncludes,
    init: (
      this: Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
      e: TE,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): PartialMixin<NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (
      this: TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
      e: TE,
    ) => TReturn;
  };

  mix<TReturn, TIncludes extends PartialMixin, TInstance>(
    includes: TIncludes,
    init: (this: TInstance) => TReturn,
  ): PartialMixin<NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (this: TInstance) => TReturn;
  };

  mix<TReturn, TIncludes extends PartialMixin, TInstance, TA>(
    includes: TIncludes,
    init: (this: TInstance, a: TA) => TReturn,
  ): PartialMixin<NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (this: TInstance, a: TA) => TReturn;
  };

  mix<TReturn, TIncludes extends PartialMixin, TInstance, TA, TB>(
    includes: TIncludes,
    init: (this: TInstance, a: TA, b: TB) => TReturn,
  ): PartialMixin<NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (this: TInstance, a: TA, b: TB) => TReturn;
  };

  mix<TReturn, TIncludes extends PartialMixin, TInstance, TA, TB, TC>(
    includes: TIncludes,
    init: (this: TInstance, a: TA, b: TB, c: TC) => TReturn,
  ): PartialMixin<NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (this: TInstance, a: TA, b: TB, c: TC) => TReturn;
  };

  mix<TReturn, TIncludes extends PartialMixin, TInstance, TA, TB, TC, TD>(
    includes: TIncludes,
    init: (this: TInstance, a: TA, b: TB, c: TC, d: TD) => TReturn,
  ): PartialMixin<NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (this: TInstance, a: TA, b: TB, c: TC, d: TD) => TReturn;
  };

  mix<TReturn, TIncludes extends PartialMixin, TInstance, TA, TB, TC, TD, TE>(
    includes: TIncludes,
    init: (this: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE) => TReturn,
  ): PartialMixin<NonNullable<TIncludes[typeof Mixin_proto]>> & {
    [Mixin_init]: (
      this: TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
      e: TE,
    ) => TReturn;
  };

  mixInstanceFactory<
    TReturn,
    TProperties,
    TPrototype extends object,
    TInstance,
  >(
    init: (this: TPrototype & Mutable<TProperties> & TInstance) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): Factory<TReturn>;

  mixInstanceFactory<
    TReturn,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
  >(
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): Function1<TA, TReturn>;

  mixInstanceFactory<
    TReturn,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
    TB,
  >(
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): Function2<TA, TB, TReturn>;

  mixInstanceFactory<
    TReturn,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
    TB,
    TC,
  >(
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): Function3<TA, TB, TC, TReturn>;

  mixInstanceFactory<
    TReturn,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
    TB,
    TC,
    TD,
  >(
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): Function4<TA, TB, TC, TD, TReturn>;

  mixInstanceFactory<
    TReturn,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
    TB,
    TC,
    TD,
    TE,
  >(
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
      e: TE,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): Function5<TA, TB, TC, TD, TE, TReturn>;

  mixInstanceFactory<TReturn, TProperties, TInstance>(
    init: (this: Mutable<TProperties> & TInstance) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): Factory<TReturn>;

  mixInstanceFactory<TReturn, TProperties, TInstance, TA>(
    init: (this: Mutable<TProperties> & TInstance, a: TA) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): Function1<TA, TReturn>;

  mixInstanceFactory<TReturn, TProperties, TInstance, TA, TB>(
    init: (this: Mutable<TProperties> & TInstance, a: TA, b: TB) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): Function2<TA, TB, TReturn>;

  mixInstanceFactory<TReturn, TProperties, TInstance, TA, TB, TC>(
    init: (
      this: Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): Function3<TA, TB, TC, TReturn>;

  mixInstanceFactory<TReturn, TProperties, TInstance, TA, TB, TC, TD>(
    init: (
      this: Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): Function4<TA, TB, TC, TD, TReturn>;

  mixInstanceFactory<TReturn, TProperties, TInstance, TA, TB, TC, TD, TE>(
    init: (
      this: Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
      e: TE,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): Function5<TA, TB, TC, TD, TE, TReturn>;

  mixInstanceFactory<TReturn, TInstance>(
    init: (this: TInstance) => TReturn,
  ): Factory<TReturn>;

  mixInstanceFactory<TReturn, TInstance, TA>(
    init: (this: TInstance, a: TA) => TReturn,
  ): Function1<TA, TReturn>;

  mixInstanceFactory<TReturn, TInstance, TA, TB>(
    init: (this: TInstance, a: TA, b: TB) => TReturn,
  ): Function2<TA, TB, TReturn>;

  mixInstanceFactory<TReturn, TInstance, TA, TB, TC>(
    init: (this: TInstance, a: TA, b: TB, c: TC) => TReturn,
  ): Function3<TA, TB, TC, TReturn>;

  mixInstanceFactory<TReturn, TInstance, TA, TB, TC, TD>(
    init: (this: TInstance, a: TA, b: TB, c: TC, d: TD) => TReturn,
  ): Function4<TA, TB, TC, TD, TReturn>;

  mixInstanceFactory<TReturn, TInstance, TA, TB, TC, TD, TE>(
    init: (this: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE) => TReturn,
  ): Function5<TA, TB, TC, TD, TE, TReturn>;

  mixInstanceFactory<
    TReturn,
    TProperties,
    TPrototype extends object,
    TInstance,
  >(
    includes: PartialMixin,
    init: (this: TPrototype & Mutable<TProperties> & TInstance) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): Factory<TReturn>;

  mixInstanceFactory<
    TReturn,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
  >(
    includes: PartialMixin,
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): Function1<TA, TReturn>;

  mixInstanceFactory<
    TReturn,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
    TB,
  >(
    includes: PartialMixin,
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): Function2<TA, TB, TReturn>;

  mixInstanceFactory<
    TReturn,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
    TB,
    TC,
  >(
    includes: PartialMixin,
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): Function3<TA, TB, TC, TReturn>;

  mixInstanceFactory<
    TReturn,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
    TB,
    TC,
    TD,
  >(
    includes: PartialMixin,
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): Function4<TA, TB, TC, TD, TReturn>;

  mixInstanceFactory<
    TReturn,
    TProperties,
    TPrototype extends object,
    TInstance,
    TA,
    TB,
    TC,
    TD,
    TE,
  >(
    includes: PartialMixin,
    init: (
      this: TPrototype & Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
      e: TE,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): Function5<TA, TB, TC, TD, TE, TReturn>;

  mixInstanceFactory<TReturn, TProperties, TInstance>(
    includes: PartialMixin,
    init: (this: Mutable<TProperties> & TInstance) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): Factory<TReturn>;

  mixInstanceFactory<TReturn, TProperties, TInstance, TA>(
    includes: PartialMixin,
    init: (this: Mutable<TProperties> & TInstance, a: TA) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): Function1<TA, TReturn>;

  mixInstanceFactory<TReturn, TProperties, TInstance, TA, TB>(
    includes: PartialMixin,
    init: (this: Mutable<TProperties> & TInstance, a: TA, b: TB) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): Function2<TA, TB, TReturn>;

  mixInstanceFactory<TReturn, TProperties, TInstance, TA, TB, TC>(
    includes: PartialMixin,
    init: (
      this: Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): Function3<TA, TB, TC, TReturn>;

  mixInstanceFactory<TReturn, TProperties, TInstance, TA, TB, TC, TD>(
    includes: PartialMixin,
    init: (
      this: Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): Function4<TA, TB, TC, TD, TReturn>;

  mixInstanceFactory<TReturn, TProperties, TInstance, TA, TB, TC, TD, TE>(
    includes: PartialMixin,
    init: (
      this: Mutable<TProperties> & TInstance,
      a: TA,
      b: TB,
      c: TC,
      d: TD,
      e: TE,
    ) => TReturn,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): Function5<TA, TB, TC, TD, TE, TReturn>;

  mixInstanceFactory<TReturn, TInstance>(
    includes: PartialMixin,
    init: (this: TInstance) => TReturn,
  ): Factory<TReturn>;

  mixInstanceFactory<TReturn, TInstance, TA>(
    includes: PartialMixin,
    init: (this: TInstance, a: TA) => TReturn,
  ): Function1<TA, TReturn>;

  mixInstanceFactory<TReturn, TInstance, TA, TB>(
    includes: PartialMixin,
    init: (this: TInstance, a: TA, b: TB) => TReturn,
  ): Function2<TA, TB, TReturn>;

  mixInstanceFactory<TReturn, TInstance, TA, TB, TC>(
    includes: PartialMixin,
    init: (this: TInstance, a: TA, b: TB, c: TC) => TReturn,
  ): Function3<TA, TB, TC, TReturn>;

  mixInstanceFactory<TReturn, TInstance, TA, TB, TC, TD>(
    includes: PartialMixin,
    init: (this: TInstance, a: TA, b: TB, c: TC, d: TD) => TReturn,
  ): Function4<TA, TB, TC, TD, TReturn>;

  mixInstanceFactory<TReturn, TInstance, TA, TB, TC, TD, TE>(
    includes: PartialMixin,
    init: (this: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE) => TReturn,
  ): Function5<TA, TB, TC, TD, TE, TReturn>;

  props<TProperties>(o: OptionalProperties<TProperties>): TProperties & {
    [Mixin_private_initializedProperties]?: true;
  };

  props(): object;

  proto<TPrototype extends object>(o: TPrototype): TPrototype;

  super_<
    TPrototype extends Record<TKey, TFunction>,
    TKey extends keyof TPrototype,
    TFunction extends (...args: any) => any,
  >(
    mixin: PartialMixin<TPrototype>,
    thiz: unknown,
    method: TKey,
    ...args: Parameters<TPrototype[TKey]>
  ): ReturnType<TPrototype[TKey]>;
}

function initUnsafe<TReturn>(
  mixin: MixinAny<TReturn>,
  instance: object,
  ...args: readonly unknown[]
): asserts instance is TReturn & object {
  const f = mixin[Mixin_init];

  if (__DEV__) {
    for (const key of Reflect.ownKeys(mixin[Mixin_properties])) {
      raiseIf(
        !Obj.hasOwn(instance as object, key),
        `Failed to include ${mixin[Mixin_init].name}.`,
      );
    }
  }

  f.call(instance, ...args);
}

export const init: Signature["init"] = initUnsafe;

export const include: Signature["include"] = (
  ...mixins: readonly PartialMixin[]
) => {
  const length = mixins[Array_length];
  if (length == 1) {
    return mixins[0];
  } else {
    let propertyDescriptions = {};
    let prototypeDescriptions = {};

    for (let i = 0; i < length; i++) {
      const mixin = mixins[i];
      propertyDescriptions = {
        ...propertyDescriptions,
        ...Obj.getOwnPropertyDescriptors(mixin[Mixin_properties]),
      };
      prototypeDescriptions = {
        ...prototypeDescriptions,
        ...mixin[Mixin_protoDescription],
      };
    }

    return {
      [Mixin_properties]: Obj.create(Obj.prototype, propertyDescriptions),
      [Mixin_protoDescription]: prototypeDescriptions,
    };
  }
};

export const mix: Signature["mix"] = ((
  initOrParent: any,
  propertiesOrInit: any,
  prototypeOrProperties?: any,
  nothingOrPrototype?: any,
) => {
  if (isFunction(initOrParent)) {
    return {
      [Mixin_init]: initOrParent,
      [Mixin_properties]: propertiesOrInit ?? {},
      [Mixin_protoDescription]: Obj.getOwnPropertyDescriptors(
        prototypeOrProperties ?? {},
      ),
    };
  } else {
    const base = include(initOrParent, {
      [Mixin_properties]: prototypeOrProperties ?? {},
      [Mixin_protoDescription]: Obj.getOwnPropertyDescriptors(
        nothingOrPrototype ?? {},
      ),
    });
    return {
      ...base,
      [Mixin_init]: propertiesOrInit,
    };
  }
}) as Signature["mix"];

export const createInstanceFactory: Signature["createInstanceFactory"] = <
  TReturn,
>(
  mixin: MixinAny<TReturn>,
): Factory<TReturn> => {
  const propertyDescription = Obj.getOwnPropertyDescriptors(
    mixin[Mixin_properties],
  );

  const prototypeDescription = __DEV__
    ? {
        ...mixin[Mixin_protoDescription],
        constructor: {
          configurable: true,
          enumerable: false,
          value: mixin[Mixin_init],
          writable: true,
        },
      }
    : mixin[Mixin_protoDescription];

  const prototype = Obj.create(Obj.prototype, prototypeDescription);

  return (...args: readonly any[]) => {
    const instance: object = Obj.create(prototype, propertyDescription);
    initUnsafe(mixin, instance, ...args);
    return instance;
  };
};

export const mixInstanceFactory: Signature["mixInstanceFactory"] = ((
  initOrParent: any,
  propertiesOrInit: any,
  prototypeOrParent?: any,
  nothingOrPrototype?: any,
) =>
  createInstanceFactory(
    mix(initOrParent, propertiesOrInit, prototypeOrParent, nothingOrPrototype),
  )) as Signature["mixInstanceFactory"];

const emptyProps = {};

export const props: Signature["props"] = <TProperties>(
  o?: OptionalProperties<TProperties>,
): TProperties & {
  [Mixin_private_initializedProperties]?: true;
} => {
  return (o ?? emptyProps) as unknown as TProperties & {
    [Mixin_private_initializedProperties]?: true;
  };
};

export function unsafeCast<T>(_v: unknown): asserts _v is T {}

export const proto = <TPrototype extends object>(
  o: TPrototype & {
    [key: string | symbol]: any; // Allow additional properties (this might be risky if not handled correctly)
  },
): TPrototype => o;

export const super_: Signature["super_"] = (<TPrototype extends object>(
  mixin: PartialMixin<TPrototype>,
  thiz: unknown,
  method: keyof TPrototype,
  ...args: any[]
): unknown => {
  const descriptor = mixin[Mixin_protoDescription][method as string];
  const f = descriptor.value;

  return (f as Function).call(thiz, ...args);
}) as Signature["super_"];

export const getProperty: Signature["getProperty"] = <
  TPrototype extends Record<TKey, any>,
  TKey extends keyof TPrototype,
>(
  mixin: PartialMixin<TPrototype>,
  thiz: unknown,
  method: TKey,
): TPrototype[TKey] => {
  const descriptor = mixin[Mixin_protoDescription][method as string];
  const f = descriptor.get;

  return (f as Function).call(thiz);
};
