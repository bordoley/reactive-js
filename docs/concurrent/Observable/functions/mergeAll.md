[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / mergeAll

# Function: mergeAll()

## Call Signature

> **mergeAll**\<`T`\>(`options`?): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

### Type Parameters

• **T**

### Parameters

#### options?

##### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity

`number`

##### concurrency

`number`

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

## Call Signature

> **mergeAll**\<`T`\>(`options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

### Type Parameters

• **T**

### Parameters

#### options

##### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity

`number`

##### concurrency

`number`

##### innerType

`Pick`\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isMulticasted`](../../variables/ObservableLike_isMulticasted.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

## Call Signature

> **mergeAll**\<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Parameters

#### options

##### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity

`number`

##### concurrency

`number`

##### innerType

`Pick`\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isMulticasted`](../../variables/ObservableLike_isMulticasted.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

## Call Signature

> **mergeAll**\<`T`\>(`options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>\>\>

### Type Parameters

• **T**

### Parameters

#### options

##### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity

`number`

##### concurrency

`number`

##### innerType

`Pick`\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isMulticasted`](../../variables/ObservableLike_isMulticasted.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>\>\>

## Call Signature

> **mergeAll**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

#### options?

##### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity

`number`

##### concurrency

`number`

##### innerType

`Pick`\<[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isMulticasted`](../../variables/ObservableLike_isMulticasted.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>
