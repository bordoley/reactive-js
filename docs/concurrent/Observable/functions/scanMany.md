[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / scanMany

# Function: scanMany()

## Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `TAcc`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

### Type Parameters

• **T**

• **TAcc**

### Parameters

#### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TAcc`\>\>

#### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `TAcc`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

## Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `TAcc`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

### Type Parameters

• **T**

• **TAcc**

### Parameters

#### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TAcc`\>\>

#### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### options

##### innerType

`Pick`\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `TAcc`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

## Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `TAcc`\>

### Type Parameters

• **T**

• **TAcc**

### Parameters

#### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`TAcc`\>\>

#### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### options

##### innerType

`Pick`\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `TAcc`\>

## Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `TAcc`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

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

`Pick`\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `TAcc`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

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

`Pick`\<[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TAcc`\>\>
