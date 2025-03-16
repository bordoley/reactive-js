[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / GenericComputationType

# Interface: GenericComputationType\<TComputationBaseOfT, TPureDeferredComputationOfT, TDeferredDeferredComputationWithSideEffectsOfT, TPureSynchronousOfT, TSynchronousWithSideEffectsOfT, TMulticastComputationOfT\>

## Type Parameters

• **TComputationBaseOfT** *extends* [`ComputationLike`](ComputationLike.md)

• **TPureDeferredComputationOfT** *extends* `TComputationBaseOfT` & [`PureDeferredComputationLike`](PureDeferredComputationLike.md)

• **TDeferredDeferredComputationWithSideEffectsOfT** *extends* `TComputationBaseOfT` & [`DeferredComputationWithSideEffectsLike`](DeferredComputationWithSideEffectsLike.md)

• **TPureSynchronousOfT** *extends* [`PureSynchronousComputationLike`](PureSynchronousComputationLike.md)

• **TSynchronousWithSideEffectsOfT** *extends* [`SynchronousComputationWithSideEffectsLike`](SynchronousComputationWithSideEffectsLike.md)

• **TMulticastComputationOfT** *extends* `TComputationBaseOfT` & [`MulticastLike`](MulticastLike.md)

## Properties

### \[Computation\_baseOfT\]?

> `readonly` `optional` **\[Computation\_baseOfT\]**: `TComputationBaseOfT`

***

### \[Computation\_deferredWithSideEffectsOfT\]?

> `readonly` `optional` **\[Computation\_deferredWithSideEffectsOfT\]**: `TDeferredDeferredComputationWithSideEffectsOfT`

***

### \[Computation\_multicastOfT\]?

> `readonly` `optional` **\[Computation\_multicastOfT\]**: `TMulticastComputationOfT`

***

### \[Computation\_pureDeferredOfT\]?

> `readonly` `optional` **\[Computation\_pureDeferredOfT\]**: `TPureDeferredComputationOfT`

***

### \[Computation\_pureSynchronousOfT\]?

> `readonly` `optional` **\[Computation\_pureSynchronousOfT\]**: `TPureSynchronousOfT`

***

### \[Computation\_synchronousWithSideEffectsOfT\]?

> `readonly` `optional` **\[Computation\_synchronousWithSideEffectsOfT\]**: `TSynchronousWithSideEffectsOfT`

***

### \[Computation\_T\]?

> `readonly` `optional` **\[Computation\_T\]**: `unknown`
