[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / StatelessComputationOperator

# Type Alias: StatelessComputationOperator()\<TComputation, TA, TB, TInComputationBaseOf\>

> **StatelessComputationOperator**\<`TComputation`, `TA`, `TB`, `TInComputationBaseOf`\>: \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputation`, `TA`\> ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputation`, `TB`\> : `TComputationOf` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `TA`\> ? [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `TB`\> : `TComputationOf` *extends* [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `TA`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `TB`\> : `TComputationOf` *extends* [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `TA`\> ? [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `TB`\> : `TComputationOf` *extends* [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputation`, `TA`\> ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputation`, `TB`\> : `never`

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

`TComputationOf` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputation`, `TA`\> ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputation`, `TB`\> : `TComputationOf` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `TA`\> ? [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `TB`\> : `TComputationOf` *extends* [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `TA`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `TB`\> : `TComputationOf` *extends* [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `TA`\> ? [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `TB`\> : `TComputationOf` *extends* [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputation`, `TA`\> ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputation`, `TB`\> : `never`
