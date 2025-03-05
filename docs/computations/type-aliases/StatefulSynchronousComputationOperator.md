[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / StatefulSynchronousComputationOperator

# Type Alias: StatefulSynchronousComputationOperator()\<TComputation, TA, TB, TInComputationBaseOf\>

> **StatefulSynchronousComputationOperator**\<`TComputation`, `TA`, `TB`, `TInComputationBaseOf`\>: \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputation`, `TA`\> ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputation`, `TB`\> : `TComputationOf` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `TA`\> ? [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `TB`\> : `TComputationOf` *extends* [`SynchronousComputationOf`](SynchronousComputationOf.md)\<`TComputation`, `TA`\> ? [`SynchronousComputationOf`](SynchronousComputationOf.md)\<`TComputation`, `TB`\> : `TComputationOf` *extends* [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `TA`\> ? [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `TB`\> : [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `TB`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](ComputationType.md)

• **TA**

• **TB**

• **TInComputationBaseOf** *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputation`, `TA`\> = [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputation`, `TA`\>

## Type Parameters

• **TComputationOf** *extends* `TInComputationBaseOf`

## Parameters

### computation

`TComputationOf`

## Returns

`TComputationOf` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputation`, `TA`\> ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputation`, `TB`\> : `TComputationOf` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `TA`\> ? [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `TB`\> : `TComputationOf` *extends* [`SynchronousComputationOf`](SynchronousComputationOf.md)\<`TComputation`, `TA`\> ? [`SynchronousComputationOf`](SynchronousComputationOf.md)\<`TComputation`, `TB`\> : `TComputationOf` *extends* [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `TA`\> ? [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `TB`\> : [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `TB`\>
