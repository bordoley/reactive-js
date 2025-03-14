[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / StatefulSynchronousComputationOperator

# Type Alias: StatefulSynchronousComputationOperator()\<TComputationType, TA, TB\>

> **StatefulSynchronousComputationOperator**\<`TComputationType`, `TA`, `TB`\>: \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `TA`\> ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `TA`\> ? [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`SynchronousComputationOf`](SynchronousComputationOf.md)\<`TComputationType`, `TA`\> ? [`SynchronousComputationOf`](SynchronousComputationOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TA`\> ? [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\> : [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `TB`\>

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

`TComputationOf` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `TA`\> ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `TA`\> ? [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`SynchronousComputationOf`](SynchronousComputationOf.md)\<`TComputationType`, `TA`\> ? [`SynchronousComputationOf`](SynchronousComputationOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TA`\> ? [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\> : [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `TB`\>
