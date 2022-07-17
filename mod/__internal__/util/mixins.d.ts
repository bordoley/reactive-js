import { Function1, Constructor, Constructor1, Constructor2, Constructor3, AnyConstructor } from '../../util/functions.js';
declare type Mixin<T, TMixed> = Function1<Constructor<T>, Constructor<T & TMixed>>;
declare type Mixin1<TA, T, TMixed> = Function1<Constructor1<TA, T>, Constructor1<TA, T & TMixed>>;
declare type Mixin2<TA, TB, T, TMixed> = Function1<Constructor2<TA, TB, T>, Constructor2<TA, TB, T & TMixed>>;
declare type Mixin3<TA, TB, TC, T, TMixed> = Function1<Constructor3<TA, TB, TC, T>, Constructor3<TA, TB, TC, T & TMixed>>;
declare const addGetter: (property: PropertyKey, get: () => unknown) => <TConstructor extends AnyConstructor>(Constructor: TConstructor) => TConstructor;
declare const addProperty: (property: PropertyKey, description: {
    get: (this: any) => unknown;
    set: (this: any, value: any) => void;
}) => <TConstructor extends AnyConstructor>(Constructor: TConstructor) => TConstructor;
declare const addMethod: (property: PropertyKey, f: (this: any, ...args: readonly any[]) => unknown) => <TConstructor extends AnyConstructor>(Constructor: TConstructor) => TConstructor;
export { Mixin, Mixin1, Mixin2, Mixin3, addGetter, addMethod, addProperty };
