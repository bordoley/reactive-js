[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / takeUntil

# Function: takeUntil()

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)

### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`StatefulAsynchronousComputationOperator`](../../type-aliases/StatefulAsynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)

### Returns

[`StatefulAsynchronousComputationOperator`](../../type-aliases/StatefulAsynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`StatelessAsynchronousComputationOperator`](../../type-aliases/StatelessAsynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)

### Returns

[`StatelessAsynchronousComputationOperator`](../../type-aliases/StatelessAsynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>
