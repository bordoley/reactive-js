[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / StatelessAsynchronousComputationOperator

# Type Alias: StatelessAsynchronousComputationOperator()\<TComputationType, TA, TB\>

> **StatelessAsynchronousComputationOperator**\<`TComputationType`, `TA`, `TB`\>: \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `TA`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `TA`\> ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `TB`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **TA**

• **TB**

## Type Parameters

• **TComputationOf** *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `TA`\>

## Parameters

### computation

`TComputationOf`

## Returns

`TComputationOf` *extends* [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `TA`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `TA`\> ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `TB`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\>
