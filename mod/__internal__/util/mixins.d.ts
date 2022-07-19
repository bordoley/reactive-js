import { Function1, Constructor, Constructor1, Constructor2, Constructor3, ConstructorOf } from '../../util/functions.js';
declare type Mixin<T, TMixed> = Function1<Constructor<T>, Constructor<T & TMixed>>;
declare type Mixin1<TA, T, TMixed> = Function1<Constructor1<TA, T>, Constructor1<TA, T & TMixed>>;
declare type Mixin2<TA, TB, T, TMixed> = Function1<Constructor2<TA, TB, T>, Constructor2<TA, TB, T & TMixed>>;
declare type Mixin3<TA, TB, TC, T, TMixed> = Function1<Constructor3<TA, TB, TC, T>, Constructor3<TA, TB, TC, T & TMixed>>;
declare const addGetter: <Tkey extends PropertyKey, T>(property: Tkey, get: () => T) => <TInstance>(Constructor: ConstructorOf<TInstance>) => ConstructorOf<TInstance & Readonly<Record<Tkey, T>>>;
declare const addProperty: <Tkey extends PropertyKey, T>(property: PropertyKey, description: {
    get: () => T;
    set: (value: T) => void;
}) => <TInstance>(Constructor: ConstructorOf<TInstance>) => ConstructorOf<TInstance & Record<Tkey, T>>;
declare const addMethod: <TKey extends PropertyKey, TMethod extends (...args: readonly any[]) => unknown>(property: PropertyKey, f: TMethod) => <TInstance>(Constructor: ConstructorOf<TInstance>) => ConstructorOf<TInstance & Record<TKey, TMethod>>;
export { Mixin, Mixin1, Mixin2, Mixin3, addGetter, addMethod, addProperty };
