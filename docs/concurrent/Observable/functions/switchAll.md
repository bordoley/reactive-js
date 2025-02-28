[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / switchAll

# Function: switchAll()

## Call Signature

> **switchAll**\<`T`\>(): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

## Call Signature

> **switchAll**\<`T`\>(`options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Parameters

#### options

##### innerType

`Pick`\<[`PureSynchronousComputationLike`](../../../computations/interfaces/PureSynchronousComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

## Call Signature

> **switchAll**\<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Parameters

#### options

##### innerType

`Pick`\<[`SynchronousComputationWithSideEffectsLike`](../../../computations/interfaces/SynchronousComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

## Call Signature

> **switchAll**\<`T`\>(`options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Parameters

#### options

##### innerType

`Pick`\<[`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`\>

## Call Signature

> **switchAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

#### options

##### innerType

`Pick`\<[`DeferredComputationWithSideEffectsLike`](../../../computations/interfaces/DeferredComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>
