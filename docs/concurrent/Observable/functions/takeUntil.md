[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / takeUntil

# Function: takeUntil()

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)

### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)

### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`\>
