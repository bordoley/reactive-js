[**Reactive-JS**](../../../README.md) • **Docs**

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / mergeMap

# Function: mergeMap()

## mergeMap(selector, options)

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`?): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

• **selector**: [`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>\>

• **options?**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.concurrency?**: `number`

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

## mergeMap(selector, options)

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

• **selector**: [`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>\>

• **options**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.concurrency?**: `number`

• **options.innerType**: `Pick`\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`unknown`\>, *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isMulticasted`](../../variables/ObservableLike_isMulticasted.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

## mergeMap(selector, options)

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

### Type Parameters

• **TA**

• **TB**

### Parameters

• **selector**: [`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>\>

• **options**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.concurrency?**: `number`

• **options.innerType**: `Pick`\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`unknown`\>, *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isMulticasted`](../../variables/ObservableLike_isMulticasted.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

## mergeMap(selector, options)

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

• **selector**: [`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\>\>

• **options**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.concurrency?**: `number`

• **options.innerType**: `Pick`\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`unknown`\>, *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isMulticasted`](../../variables/ObservableLike_isMulticasted.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

## mergeMap(selector, options)

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

• **selector**: [`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TB`\>\>

• **options**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.concurrency?**: `number`

• **options.innerType**: `Pick`\<[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`unknown`\>, *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isMulticasted`](../../variables/ObservableLike_isMulticasted.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>
