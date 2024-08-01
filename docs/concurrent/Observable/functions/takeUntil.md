[**Reactive-JS**](../../../README.md) • **Docs**

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / takeUntil

# Function: takeUntil()

## takeUntil(notifier)

> **takeUntil**\<`T`\>(`notifier`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

• **notifier**: [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`unknown`\>

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

## takeUntil(notifier)

> **takeUntil**\<`T`\>(`notifier`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

### Type Parameters

• **T**

### Parameters

• **notifier**: [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`unknown`\>

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

## takeUntil(notifier)

> **takeUntil**\<`T`\>(`notifier`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

• **notifier**: [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`unknown`\>

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

## takeUntil(notifier)

> **takeUntil**\<`T`\>(`notifier`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

• **notifier**: [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`unknown`\>

### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>
