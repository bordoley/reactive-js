[**Reactive-JS**](../../../../README.md) • **Docs**

***

[Reactive-JS](../../../../README.md) / [concurrent/Observable/effects](../README.md) / \_\_stream

# Function: \_\_stream()

> **\_\_stream**\<`TStreamable`\>(`streamable`, `__namedParameters`?): [`StreamOf`](../../../type-aliases/StreamOf.md)\<`TStreamable`\>

## Type Parameters

• **TStreamable** *extends* [`StreamableLike`](../../../interfaces/StreamableLike.md)\<`unknown`, `unknown`, [`StreamLike`](../../../interfaces/StreamLike.md)\<`unknown`, `unknown`\>\>

## Parameters

• **streamable**: `TStreamable`

• **\_\_namedParameters?**

• **\_\_namedParameters.backpressureStrategy?**: [`BackpressureStrategy`](../../../../utils/type-aliases/BackpressureStrategy.md)

• **\_\_namedParameters.capacity?**: `number`

• **\_\_namedParameters.replay?**: `number`

• **\_\_namedParameters.scheduler?**: [`SchedulerLike`](../../../interfaces/SchedulerLike.md)

## Returns

[`StreamOf`](../../../type-aliases/StreamOf.md)\<`TStreamable`\>
