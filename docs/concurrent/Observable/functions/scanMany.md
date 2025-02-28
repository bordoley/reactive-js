[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / scanMany

# Function: scanMany()

## Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `TAcc`\>

### Type Parameters

• **T**

• **TAcc**

### Parameters

#### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TAcc`\>\>

#### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `TAcc`\>

## Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `TAcc`\>

### Type Parameters

• **T**

• **TAcc**

### Parameters

#### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TAcc`\>\>

#### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### options

##### innerType

`Pick`\<[`PureSynchronousComputationLike`](../../../computations/interfaces/PureSynchronousComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `TAcc`\>

## Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `TAcc`\>

### Type Parameters

• **T**

• **TAcc**

### Parameters

#### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TAcc`\>\>

#### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### options

##### innerType

`Pick`\<[`SynchronousComputationWithSideEffectsLike`](../../../computations/interfaces/SynchronousComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `TAcc`\>

## Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `TAcc`\>

### Type Parameters

• **T**

• **TAcc**

### Parameters

#### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TAcc`\>\>

#### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### options

##### innerType

`Pick`\<[`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `TAcc`\>

## Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TAcc`\>\>

### Type Parameters

• **T**

• **TAcc**

### Parameters

#### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TAcc`\>\>

#### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### options

##### innerType

`Pick`\<[`DeferredComputationWithSideEffectsLike`](../../../computations/interfaces/DeferredComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TAcc`\>\>
