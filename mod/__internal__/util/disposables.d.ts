import { DisposableLike, DisposableLike_error, Error, DisposableLike_isDisposed, DisposableOrTeardown } from '../../util/DisposableLike.js';
import { Mixin, Mixin1, Mixin2, Mixin3 } from "./mixins.mjs";
import { Option } from '../../util/Option.js';
import { Factory } from '../../util/functions.js';
import { MutableRefLike } from "./MutableRefLike.mjs";
declare const DelegatingDisposableMixin_delegate: unique symbol;
interface DelegatingDisposableMixin {
    readonly [DelegatingDisposableMixin_delegate]: DisposableLike;
}
interface MixinDelegatingDisposable {
    <T extends DelegatingDisposableMixin>(): Mixin<T, DisposableLike>;
    <T extends DelegatingDisposableMixin, TA>(): Mixin1<TA, T, DisposableLike>;
    <T extends DelegatingDisposableMixin, TA, TB>(): Mixin2<TA, TB, T, DisposableLike>;
    <T extends DelegatingDisposableMixin, TA, TB, TC>(): Mixin3<TA, TB, TC, T, DisposableLike>;
}
declare const mixinDelegatingDisposable: MixinDelegatingDisposable;
declare const DisposableMixin_disposables: unique symbol;
interface DisposableMixin {
    [DisposableLike_error]: Option<Error>;
    [DisposableLike_isDisposed]: boolean;
    readonly [DisposableMixin_disposables]: Set<DisposableOrTeardown>;
}
interface MixinDisposable {
    <T extends DisposableMixin>(): Mixin<T, DisposableLike>;
    <T extends DisposableMixin, TA>(): Mixin1<TA, T, DisposableLike>;
    <T extends DisposableMixin, TA, TB>(): Mixin2<TA, TB, T, DisposableLike>;
    <T extends DisposableMixin, TA, TB, TC>(): Mixin3<TA, TB, TC, T, DisposableLike>;
}
declare const mixinDisposable: MixinDisposable;
interface SerialDisposableLike<TDisposable extends DisposableLike> extends DisposableLike, MutableRefLike<TDisposable> {
}
declare const SerialDisposableMixin_current: unique symbol;
interface SerialDisposableMixin<T extends DisposableLike> extends DisposableLike {
    [SerialDisposableMixin_current]: Option<T>;
}
interface MixinSerialDisposable {
    <T extends SerialDisposableMixin<TDisposable>, TDisposable extends DisposableLike = DisposableLike>(defaultValue: Factory<TDisposable>): Mixin<T, SerialDisposableLike<TDisposable>>;
    <T extends SerialDisposableMixin<TDisposable>, TA, TDisposable extends DisposableLike = DisposableLike>(defaultValue: Factory<TDisposable>): Mixin1<TA, T, SerialDisposableLike<TDisposable>>;
    <T extends SerialDisposableMixin<TDisposable>, TA, TB, TDisposable extends DisposableLike = DisposableLike>(defaultValue: Factory<TDisposable>): Mixin2<TA, TB, T, SerialDisposableLike<TDisposable>>;
    <T extends SerialDisposableMixin<TDisposable>, TA, TB, TC, TDisposable extends DisposableLike = DisposableLike>(defaultValue: Factory<TDisposable>): Mixin3<TA, TB, TC, T, SerialDisposableLike<TDisposable>>;
}
declare const mixinSerialDisposable: MixinSerialDisposable;
export { DelegatingDisposableMixin, DelegatingDisposableMixin_delegate, DisposableMixin, DisposableMixin_disposables, SerialDisposableLike, SerialDisposableMixin, SerialDisposableMixin_current, mixinDelegatingDisposable, mixinDisposable, mixinSerialDisposable };
