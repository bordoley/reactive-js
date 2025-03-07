[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / StreamableLike

# Interface: StreamableLike\<TReq, T, TStream\>

A container that supports bi-directional streaming.

## Typeparam

TReq

## Typeparam

T

## Typeparam

TStream

## Type Parameters

• **TReq** = `unknown`

• **T** = `unknown`

• **TStream** *extends* [`StreamLike`](StreamLike.md)\<`TReq`, `T`\> = [`StreamLike`](StreamLike.md)\<`TReq`, `T`\>

## Methods

### \[StreamableLike\_stream\]()

> **\[StreamableLike\_stream\]**(`scheduler`, `options`?): `TStream`

Subscribe to the Streamable.

#### Parameters

##### scheduler

[`SchedulerLike`](../../utils/interfaces/SchedulerLike.md)

The scheduler to subscribe to the stream with.

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

The capacity of the stream's request queue.

###### replay?

`number`

The number of items to buffer for replay when an observer subscribes
to the stream.

#### Returns

`TStream`
