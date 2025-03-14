[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / StatelessComputationOperator

# Type Alias: StatelessComputationOperator()\<TComputationType, TA, TB, TInComputationBaseOf\>

> **StatelessComputationOperator**\<`TComputationType`, `TA`, `TB`, `TInComputationBaseOf`\>: \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `TA`\> ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `TA`\> ? [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `TA`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TA`\> ? [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `TA`\> ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `TB`\> : `never`

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **TA**

• **TB**

• **TInComputationBaseOf** *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `TA`\> = [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `TA`\>

## Type Parameters

• **TComputationOf** *extends* `TInComputationBaseOf`

## Parameters

### computation

`TComputationOf`

## Returns

`TComputationOf` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `TA`\> ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `TA`\> ? [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `TA`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TA`\> ? [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\> : `TComputationOf` *extends* [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `TA`\> ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `TB`\> : `never`
