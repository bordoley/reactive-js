[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / takeUntil

# Function: takeUntil()

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`StatefulSynchronousComputationOperator`](../../../computations/type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)

### Returns

[`StatefulSynchronousComputationOperator`](../../../computations/type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationOperatorWithSideEffects`](../../../computations/type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)

### Returns

[`ComputationOperatorWithSideEffects`](../../../computations/type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`StatefulAsynchronousComputationOperator`](../../../computations/type-aliases/StatefulAsynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)

### Returns

[`StatefulAsynchronousComputationOperator`](../../../computations/type-aliases/StatefulAsynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>
