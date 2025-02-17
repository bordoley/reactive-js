[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / concatWith

# Function: concatWith()

## Call Signature

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### snd

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

#### tail

...readonly [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>[]

### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`\>

## Call Signature

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### snd

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### tail

...readonly [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>[]

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

## Call Signature

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### snd

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

#### tail

...readonly [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>[]

### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`\>

## Call Signature

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\> \| [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

#### snd

[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>

#### tail

...readonly [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>[]

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\> \| [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>
