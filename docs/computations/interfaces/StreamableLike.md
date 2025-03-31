[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / StreamableLike

# Interface: StreamableLike\<TReq, T, TStream\>

## Type Parameters

• **TReq** = `unknown`

• **T** = `unknown`

• **TStream** *extends* [`StreamLike`](StreamLike.md)\<`TReq`, `T`\> = [`StreamLike`](StreamLike.md)\<`TReq`, `T`\>

## Methods

### \[StreamableLike\_stream\]()

> **\[StreamableLike\_stream\]**(`scheduler`, `options`?): `TStream` & [`DisposableLike`](../../utils/interfaces/DisposableLike.md)

#### Parameters

##### scheduler

[`SchedulerLike`](../../utils/interfaces/SchedulerLike.md)

##### options?

###### autoDispose?

`boolean`

###### backpressureStrategy?

[`BackpressureStrategy`](../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

#### Returns

`TStream` & [`DisposableLike`](../../utils/interfaces/DisposableLike.md)
