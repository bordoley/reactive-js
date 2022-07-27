import { Function1, pipe } from "../../functions";
import { ObserverLike } from "../../scheduling";
import { SinkLike_notify } from "../../util";
import { notify } from "../../util/SinkLike";
import { Object_init, Object_properties, anyProperty } from "./Object";

export const Sink_delegate = Symbol("Sink_delegate");

type TMapProperties = {
  [Sink_delegate]: ObserverLike;
  mapper: Function1<any, any>;
};

export const mapPrototype = {
  [Object_properties]: {
    mapper: anyProperty,
  },
  [Object_init](
    this: TMapProperties,
    delegate: ObserverLike,
    mapper: Function1<any, any>,
  ) {
    this[Sink_delegate] = delegate;
    this.mapper = mapper;
  },
  [SinkLike_notify](this: TMapProperties, next: any) {
    const mapped = this.mapper(next);
    pipe(this[Sink_delegate], notify(mapped));
  },
};
