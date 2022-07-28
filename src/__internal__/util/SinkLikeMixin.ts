import { Function1, SideEffect1, none, pipe, returns } from "../../functions";
import { SinkLike, SinkLike_notify } from "../../util";
import { notify } from "../../util/SinkLike";

import {
  delegatingDisposableMixin,
  disposableMixin,
} from "../util/DisposableLikeMixins";
import { DisposableLike } from "./DisposableLikeInternal";
import {
  Object_init,
  Object_properties,
  PropertyTypeOf,
  createObjectFactory,
  init,
  mixWith,
} from "./Object";

export const Sink_delegate = Symbol("Sink_delegate");

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

export const mapSinkMixin: <TA, TB>() => DisposableLike & {
  [Object_properties]: {
    [Sink_delegate]: SinkLike<TB>;
    mapper: Function1<TA, TB>;
  };
  [Object_init](
    this: {
      [Sink_delegate]: SinkLike<TB>;
      mapper: Function1<TA, TB>;
    },
    delegate: SinkLike<TB>,
    mapper: Function1<TA, TB>,
  ): void;
  [SinkLike_notify](next: TA): void;
} = /*@__PURE__*/ (<TA, TB>() => {
  type TProperties = {
    [Sink_delegate]: SinkLike<TB>;
    mapper: Function1<TA, TB>;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return pipe(
    {
      [Object_properties]: {
        [Sink_delegate]: none as any,
        mapper: none as any,
      },
      [Object_init](
        this: TProperties,
        delegate: SinkLike<TB>,
        mapper: Function1<TA, TB>,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_delegate] = delegate;
        this.mapper = mapper;
      },
      [SinkLike_notify](this: TProperties, next: TA) {
        const mapped = this.mapper(next);
        pipe(this[Sink_delegate], notify(mapped));
      },
    },
    mixWith(delegatingDisposableMixin),
    returns,
  );
})();

export const onNotifySinkMixin: <T>() => DisposableLike & {
  [Object_properties]: {
    [Sink_delegate]: SinkLike<T>;
    onNotify: SideEffect1<T>;
  };
  [Object_init](
    this: {
      [Sink_delegate]: SinkLike<T>;
      onNotify: SideEffect1<T>;
    },
    delegate: SinkLike<T>,
    monNotify: SideEffect1<T>,
  ): void;
  [SinkLike_notify](next: T): void;
} = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [Sink_delegate]: SinkLike<T>;
    onNotify: SideEffect1<T>;
  } & PropertyTypeOf<[typeof delegatingDisposableMixin]>;

  return pipe(
    {
      [Object_properties]: {
        [Sink_delegate]: none as any,
        onNotify: none as any,
      },
      [Object_init](
        this: TProperties,
        delegate: SinkLike<T>,
        onNotify: SideEffect1<T>,
      ) {
        init(delegatingDisposableMixin, this, delegate);
        this[Sink_delegate] = delegate;
        this.onNotify = onNotify;
      },
      [SinkLike_notify](this: TProperties, next: T) {
        this.onNotify(next);
        pipe(this[Sink_delegate], notify(next));
      },
    },
    mixWith(delegatingDisposableMixin),
    returns,
  );
})();
