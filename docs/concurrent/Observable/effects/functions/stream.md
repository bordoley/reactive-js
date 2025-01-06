[**Reactive-JS**](../../../../README.md)

***

[Reactive-JS](../../../../README.md) / [concurrent/Observable/effects](../README.md) / \_\_stream

# Function: \_\_stream()

> **\_\_stream**\<`TStreamable`\>(`streamable`, `__namedParameters`?): [`StreamOf`](../../../type-aliases/StreamOf.md)\<`TStreamable`\>

## Type Parameters

• **TStreamable** *extends* [`StreamableLike`](../../../interfaces/StreamableLike.md)\<[`StreamLike`](../../../interfaces/StreamLike.md)\<`unknown`, `unknown`\>\>

## Parameters

### streamable

`TStreamable`

### \_\_namedParameters?

#### backpressureStrategy

[`BackpressureStrategy`](../../../../utils/type-aliases/BackpressureStrategy.md)

#### capacity

`number`

#### replay

`number`

#### scheduler

[`SchedulerLike`](../../../interfaces/SchedulerLike.md)

## Returns

[`StreamOf`](../../../type-aliases/StreamOf.md)\<`TStreamable`\>
