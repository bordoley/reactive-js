import {
  Constructor,
  Constructor1,
  Constructor2,
  Constructor3,
  ConstructorOf,
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
const getPrototype = (constructor: ConstructorOf) => constructor.prototype;

export const addGetter =
  <Tkey extends PropertyKey, T>(property: Tkey, get: () => T) =>
  <TInstance>(
    Constructor: ConstructorOf<TInstance>,
  ): ConstructorOf<TInstance & Readonly<Record<Tkey, T>>> => {
    defineObjectProperty(getPrototype(Constructor), property, {
      get,
    });
    return Constructor as any;
  };

export const addProperty =
  <Tkey extends PropertyKey, T>(
    property: PropertyKey,
    description: {
      get: () => T;
      set: (value: T) => void;
    },
  ) =>
  <TInstance>(
    Constructor: ConstructorOf<TInstance>,
  ): ConstructorOf<TInstance & Record<Tkey, T>> => {
    defineObjectProperty(getPrototype(Constructor), property, description);
    return Constructor as any;
  };

export const addMethod =
  <
    TKey extends PropertyKey,
    TMethod extends (...args: readonly any[]) => unknown,
  >(
    property: PropertyKey,
    f: TMethod,
  ) =>
  <TInstance>(
    Constructor: ConstructorOf<TInstance>,
  ): ConstructorOf<TInstance & Record<TKey, TMethod>> => {
    getPrototype(Constructor)[property] = f;
    return Constructor as any;
  };
