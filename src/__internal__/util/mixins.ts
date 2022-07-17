import {
  AnyConstructor,
  Constructor,
  Constructor1,
  Constructor2,
  Constructor3,
  Function1,
} from "../../util/functions";

export type Mixin<T, TMixed> = Function1<
  Constructor<T>,
  Constructor<T & TMixed>
>;
export type Mixin1<TA, T, TMixed> = Function1<
  Constructor1<TA, T>,
  Constructor1<TA, T & TMixed>
>;
export type Mixin2<TA, TB, T, TMixed> = Function1<
  Constructor2<TA, TB, T>,
  Constructor2<TA, TB, T & TMixed>
>;

export type Mixin3<TA, TB, TC, T, TMixed> = Function1<
  Constructor3<TA, TB, TC, T>,
  Constructor3<TA, TB, TC, T & TMixed>
>;

const { defineProperty: defineObjectProperty } = Object;
const getPrototype = (constructor: AnyConstructor) => constructor.prototype;

export const addGetter =
  (property: PropertyKey, get: () => unknown) =>
  <TConstructor extends AnyConstructor>(
    Constructor: TConstructor,
  ): TConstructor => {
    defineObjectProperty(getPrototype(Constructor), property, {
      get,
    });
    return Constructor;
  };

export const addProperty =
  (
    property: PropertyKey,
    description: {
      get: (this: any) => unknown;
      set: (this: any, value: any) => void;
    },
  ) =>
  <TConstructor extends AnyConstructor>(
    Constructor: TConstructor,
  ): TConstructor => {
    defineObjectProperty(getPrototype(Constructor), property, description);
    return Constructor;
  };

export const addMethod =
  (property: PropertyKey, f: (this: any, ...args: readonly any[]) => unknown) =>
  <TConstructor extends AnyConstructor>(
    Constructor: TConstructor,
  ): TConstructor => {
    Constructor.prototype[property] = f;
    return Constructor;
  };
