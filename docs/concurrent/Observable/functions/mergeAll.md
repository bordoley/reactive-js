[**Reactive-JS**](../../../README.md) • **Docs**

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / mergeAll

# Function: mergeAll()

## mergeAll(options)

> **mergeAll**\<`T`\>(`options`?): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

### Type Parameters

• **T**

### Parameters

• **options?**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.concurrency?**: `number`

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

## mergeAll(options)

> **mergeAll**\<`T`\>(`options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

### Type Parameters

• **T**

### Parameters

• **options**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.concurrency?**: `number`

• **options.innerType**: `Pick`\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`unknown`\>, *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isMulticasted`](../../variables/ObservableLike_isMulticasted.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

## mergeAll(options)

> **mergeAll**\<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Parameters

• **options**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.concurrency?**: `number`

• **options.innerType**: `Pick`\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`unknown`\>, *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isMulticasted`](../../variables/ObservableLike_isMulticasted.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

## mergeAll(options)

> **mergeAll**\<`T`\>(`options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>\>\>

### Type Parameters

• **T**

### Parameters

• **options**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.concurrency?**: `number`

• **options.innerType**: `Pick`\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`unknown`\>, *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isMulticasted`](../../variables/ObservableLike_isMulticasted.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>\>\>

## mergeAll(options)

> **mergeAll**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

• **options?**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.concurrency?**: `number`

• **options.innerType?**: `Pick`\<[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`unknown`\>, *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isMulticasted`](../../variables/ObservableLike_isMulticasted.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>
