[**Reactive-JS**](../../../README.md) • **Docs**

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / onSubscribe

# Function: onSubscribe()

## onSubscribe(f)

> **onSubscribe**\<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

### Type Parameters

• **T**

### Parameters

• **f**: [`Factory`](../../../functions/type-aliases/Factory.md)\<[`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

## onSubscribe(f)

> **onSubscribe**\<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

### Type Parameters

• **T**

### Parameters

• **f**: [`Factory`](../../../functions/type-aliases/Factory.md)\<[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`Error`\>\>\>

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

## onSubscribe(f)

> **onSubscribe**\<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

### Type Parameters

• **T**

### Parameters

• **f**: [`SideEffect`](../../../functions/type-aliases/SideEffect.md)

### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>
