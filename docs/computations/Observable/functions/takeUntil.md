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

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`unknown`\>

### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`unknown`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`unknown`\>

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`StatefulAsynchronousComputationOperator`](../../type-aliases/StatefulAsynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`unknown`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`unknown`\>

### Returns

[`StatefulAsynchronousComputationOperator`](../../type-aliases/StatefulAsynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`unknown`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`unknown`\>

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`StatelessAsynchronousComputationOperator`](../../type-aliases/StatelessAsynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`unknown`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`unknown`\>\>

### Returns

[`StatelessAsynchronousComputationOperator`](../../type-aliases/StatelessAsynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>
