[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / exhaustMap

# Function: exhaustMap()

## Call Signature

> **exhaustMap**\<`TA`, `TB`\>(`selector`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>\>

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

## Call Signature

> **exhaustMap**\<`TA`, `TB`\>(`selector`, `options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>\>

#### options

##### innerType

`Pick`\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

## Call Signature

> **exhaustMap**\<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>\>

#### options

##### innerType

`Pick`\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

## Call Signature

> **exhaustMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\>\>

#### options

##### innerType

`Pick`\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

## Call Signature

> **exhaustMap**\<`TA`, `TB`\>(`selector`, `options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TB`\>\>

#### options

##### innerType

`Pick`\<[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>
