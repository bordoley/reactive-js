[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / mergeMap

# Function: mergeMap()

## Call Signature

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`?): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>\>

#### options?

##### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

##### concurrency?

`number`

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`\>

## Call Signature

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>\>

#### options

##### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

##### concurrency?

`number`

##### innerType

`Pick`\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`\>

## Call Signature

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>\>

#### options

##### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

##### concurrency?

`number`

##### innerType

`Pick`\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

## Call Signature

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\>\>

#### options

##### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

##### concurrency?

`number`

##### innerType

`Pick`\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`\>

## Call Signature

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TB`\>\>

#### options

##### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

##### concurrency?

`number`

##### innerType

`Pick`\<[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>
