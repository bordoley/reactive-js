import {
  Factory,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  none,
  pipe,
  returns,
} from "../../functions";
import { SinkLike, SinkLike_notify } from "../../util";
import { notify } from "../../util/SinkLike";

import {
  delegatingDisposableMixin,
  disposableMixin,
} from "../util/DisposableLikeMixins";
import { DisposableLike, dispose } from "./DisposableLikeInternal";
import {
  Object_init,
  Object_properties,
  PropertyTypeOf,
  createObjectFactory,
  init,
  mixWith,
} from "./Object";

const Sink_private_delegate = Symbol("Sink_private_delegate");

export const createSink: <T>() => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  pipe(
    {
      [Object_properties]: {},
      [Object_init](this: PropertyTypeOf<[typeof disposableMixin]>) {
        init(disposableMixin, this);
      },
      [SinkLike_notify](_: T) {},
    },
    mixWith(disposableMixin),
    createObjectFactory<
      SinkLike<T>,
      PropertyTypeOf<[typeof disposableMixin]>
    >(),
  ))();

export const keepSinkMixin: <T>() => DisposableLike & {
  [Object_properties]: unknown;
  [Object_init](
    this: unknown,
    delegate: SinkLike<T>,
    predicate: Predicate<T>,
  ): void;
  [SinkLike_notify](next: T): void;
} = /*@__PURE__*/ (<T>() => {
  const KeepSink_private_predicate = Symbol("KeepSink_private_predicate");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<T>;
    [KeepSink_private_predicate]: Predicate<T>;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return pipe(
    {
      [Object_properties]: {
        [Sink_private_delegate]: none,
        [KeepSink_private_predicate]: none,
      },
      [Object_init](
        this: TProperties,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[KeepSink_private_predicate] = predicate;
      },
      [SinkLike_notify](this: TProperties, next: T) {
        if (this[KeepSink_private_predicate](next)) {
          pipe(this[Sink_private_delegate], notify(next));
        }
      },
    },
    mixWith(delegatingDisposableMixin),
    returns,
  );
})();

export const mapSinkMixin: <TA, TB>() => DisposableLike & {
  [Object_properties]: unknown;
  [Object_init](
    this: unknown,
    delegate: SinkLike<TB>,
    mapper: Function1<TA, TB>,
  ): void;
  [SinkLike_notify](next: TA): void;
} = /*@__PURE__*/ (<TA, TB>() => {
  const MapSink_private_mapper = Symbol("MapSink_private_mapper");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<TB>;
    [MapSink_private_mapper]: Function1<TA, TB>;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return pipe(
    {
      [Object_properties]: {
        [Sink_private_delegate]: none as any,
        mapper: none as any,
      },
      [Object_init](
        this: TProperties,
        delegate: SinkLike<TB>,
        mapper: Function1<TA, TB>,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[MapSink_private_mapper] = mapper;
      },
      [SinkLike_notify](this: TProperties, next: TA) {
        const mapped = this[MapSink_private_mapper](next);
        pipe(this[Sink_private_delegate], notify(mapped));
      },
    },
    mixWith(delegatingDisposableMixin),
    returns,
  );
})();

export const onNotifySinkMixin: <T>() => DisposableLike & {
  [Object_properties]: unknown;
  [Object_init](
    this: unknown,
    delegate: SinkLike<T>,
    monNotify: SideEffect1<T>,
  ): void;
  [SinkLike_notify](next: T): void;
} = /*@__PURE__*/ (<T>() => {
  const OnNotifySink_private_onNotify = Symbol("OnNotifySink_private_onNotify");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<T>;
    [OnNotifySink_private_onNotify]: SideEffect1<T>;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return pipe(
    {
      [Object_properties]: {
        [Sink_private_delegate]: none,
        [OnNotifySink_private_onNotify]: none,
      },
      [Object_init](
        this: TProperties,
        delegate: SinkLike<T>,
        onNotify: SideEffect1<T>,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[OnNotifySink_private_onNotify] = onNotify;
      },
      [SinkLike_notify](this: TProperties, next: T) {
        this[OnNotifySink_private_onNotify](next);
        pipe(this[Sink_private_delegate], notify(next));
      },
    },
    mixWith(delegatingDisposableMixin),
    returns,
  );
})();

export const scanSinkMixin: <T, TAcc>() => DisposableLike & {
  [Object_properties]: unknown;
  [Object_init](
    this: unknown,
    delegate: SinkLike<TAcc>,
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): void;
  [SinkLike_notify](next: T): void;
} = /*@__PURE__*/ (<T, TAcc>() => {
  const ScanSink_private_reducer = Symbol("ScanSink_private_reducer");
  const ScanSink_private_acc = Symbol("ScanSink_private_acc");

  type TProperties = {
    [Sink_private_delegate]: SinkLike<TAcc>;
    [ScanSink_private_reducer]: Reducer<T, TAcc>;
    [ScanSink_private_acc]: TAcc;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return pipe(
    {
      [Object_properties]: {
        [Sink_private_delegate]: none,
        [ScanSink_private_reducer]: none,
        [ScanSink_private_acc]: none,
      },
      [Object_init](
        this: TProperties & DisposableLike,
        delegate: SinkLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_private_delegate] = delegate;
        this[ScanSink_private_reducer] = reducer;

        try {
          const acc = initialValue();
          this[ScanSink_private_acc] = acc;
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }
      },
      [SinkLike_notify](this: TProperties, next: T) {
        const nextAcc = this[ScanSink_private_reducer](
          this[ScanSink_private_acc],
          next,
        );
        this[ScanSink_private_acc] = nextAcc;
        pipe(this[Sink_private_delegate], notify(nextAcc));
      },
    },
    mixWith(delegatingDisposableMixin),
    returns,
  );
})();
