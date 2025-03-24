[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / flatMapAsync

# Function: flatMapAsync()

> **flatMapAsync**\<`TComputationType`, `TFlattenKey`\>(`m`): \<`TA`, `TB`\>(`key`, `selector`) => [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, [`DeferredComputationWithSideEffectsLike`](../../interfaces/DeferredComputationWithSideEffectsLike.md), `TA`, `TB`\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

• **TFlattenKey** *extends* `string` \| `number` \| `symbol`

## Parameters

### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\> & [`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md)\<`TComputationType`, \{\}\>, `"map"` \| `"fromAsyncFactory"`\> & \{ readonly \[key in string \| number \| symbol\]: key extends TFlattenKey ? \{ (): HigherOrderComputationOperator\<TComputationType, PureSynchronousComputationLike, PureSynchronousComputationOf\<TComputationType, T\>, T\>; (options: \{ innerType: TInnerLike \}): HigherOrderComputationOperator\<TComputationType, TInnerLike, HigherOrderInnerComputationOf\<TComputationType, TInnerLike, T\>, T\> \} : unknown \}

## Returns

`Function`

### Type Parameters

• **TA**

• **TB**

### Parameters

#### key

`TFlattenKey`

#### selector

(`a`, `options`?) => `Promise`\<`TB`\>

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, [`DeferredComputationWithSideEffectsLike`](../../interfaces/DeferredComputationWithSideEffectsLike.md), `TA`, `TB`\>
