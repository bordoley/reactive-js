import { Function1, none, pipe, returns } from "../../functions";
import { SinkLike, SinkLike_notify } from "../../util";
import { notify } from "../../util/SinkLike";

import { prototype as delegatingDisposablePrototype } from "../util/DelegatingDisposable";
import { DisposableLike } from "./DisposableLikeInternal";
import {
  Object_init,
  Object_properties,
  PropertyTypeOf,
  init,
  mixWith,
} from "./Object";

export const Sink_delegate = Symbol("Sink_delegate");

type TMapPrototype<TA, TB> = DisposableLike & {
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
};

export const mapPrototype: <TA, TB>() => TMapPrototype<TA, TB> =
  /*@__PURE__*/ (<TA, TB>() => {
    type TMapProperties = {
      [Sink_delegate]: SinkLike<TB>;
      mapper: Function1<TA, TB>;
    } & PropertyTypeOf<[typeof delegatingDisposablePrototype]>;

    return pipe(
      {
        [Object_properties]: {
          [Sink_delegate]: none as any,
          mapper: none as any,
        },
        [Object_init](
          this: TMapProperties,
          delegate: SinkLike<TB>,
          mapper: Function1<TA, TB>,
        ) {
          init(delegatingDisposablePrototype, this, delegate);
          this[Sink_delegate] = delegate;
          this.mapper = mapper;
        },
        [SinkLike_notify](this: TMapProperties, next: TA) {
          const mapped = this.mapper(next);
          pipe(this[Sink_delegate], notify(mapped));
        },
      },
      mixWith(delegatingDisposablePrototype),
      returns,
    );
  })();
