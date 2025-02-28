[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / concatAll

# Function: concatAll()

## Call Signature

> **concatAll**\<`T`\>(): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`\>

## Call Signature

> **concatAll**\<`T`\>(`options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Parameters

#### options

##### innerType

`Pick`\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`\>

## Call Signature

> **concatAll**\<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Parameters

#### options

##### innerType

`Pick`\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

## Call Signature

> **concatAll**\<`T`\>(`options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Parameters

#### options

##### innerType

`Pick`\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`\>

## Call Signature

> **concatAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

#### options

##### innerType

`Pick`\<[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>
