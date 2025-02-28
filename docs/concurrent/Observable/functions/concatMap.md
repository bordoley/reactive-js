[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / concatMap

# Function: concatMap()

## Call Signature

> **concatMap**\<`TA`, `TB`\>(`selector`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>\>

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`\>

## Call Signature

> **concatMap**\<`TA`, `TB`\>(`selector`, `options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>\>

#### options

##### innerType

`Pick`\<[`PureSynchronousComputationLike`](../../../computations/interfaces/PureSynchronousComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`\>

## Call Signature

> **concatMap**\<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>\>

#### options

##### innerType

`Pick`\<[`SynchronousComputationWithSideEffectsLike`](../../../computations/interfaces/SynchronousComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

## Call Signature

> **concatMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\>\>

#### options

##### innerType

`Pick`\<[`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`\>

## Call Signature

> **concatMap**\<`TA`, `TB`\>(`selector`, `options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TB`\>\>

#### options

##### innerType

`Pick`\<[`DeferredComputationWithSideEffectsLike`](../../../computations/interfaces/DeferredComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>
