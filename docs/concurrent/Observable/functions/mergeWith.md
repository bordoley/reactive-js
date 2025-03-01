[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / mergeWith

# Function: mergeWith()

## Call Signature

> **mergeWith**\<`T`\>(`snd`, ...`tail`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### snd

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### tail

...readonly [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>[]

### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

## Call Signature

> **mergeWith**\<`T`\>(`snd`, ...`tail`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### snd

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

#### tail

...readonly [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>[]

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

## Call Signature

> **mergeWith**\<`T`\>(`snd`, ...`tail`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`\>

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

> **mergeWith**\<`T`\>(`snd`, ...`tail`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### snd

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\>

#### tail

...readonly [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\>[]

### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

## Call Signature

> **mergeWith**\<`T`\>(`snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

#### snd

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### tail

...readonly [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>[]

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>
