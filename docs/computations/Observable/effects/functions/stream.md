[**Reactive-JS**](../../../../README.md)

***

[Reactive-JS](../../../../README.md) / [computations/Observable/effects](../README.md) / \_\_stream

# Function: \_\_stream()

> **\_\_stream**\<`TStreamable`\>(`streamable`, `__namedParameters`?): [`StreamOf`](../../../type-aliases/StreamOf.md)\<`TStreamable`\>

## Type Parameters

• **TStreamable** *extends* [`StreamableLike`](../../../interfaces/StreamableLike.md)\<`unknown`, `unknown`, [`StreamLike`](../../../interfaces/StreamLike.md)\<`unknown`, `unknown`\>\>

## Parameters

### streamable

`TStreamable`

### \_\_namedParameters?

#### autoDispose?

`boolean`

#### backpressureStrategy?

[`BackpressureStrategy`](../../../../utils/type-aliases/BackpressureStrategy.md)

#### capacity?

`number`

#### scheduler?

[`SchedulerLike`](../../../../utils/interfaces/SchedulerLike.md)

## Returns

[`StreamOf`](../../../type-aliases/StreamOf.md)\<`TStreamable`\>
