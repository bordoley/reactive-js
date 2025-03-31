[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / fromReadonlyArray

# Function: fromReadonlyArray()

> **fromReadonlyArray**\<`TComputationType`, `TComputationModule`\>(`m`, `options`?): \<`T`\>(`arr`) => [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>

## Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"genPure"`\>

## Parameters

### m

`TComputationModule`

### options?

`object` & `Parameters`\<`TComputationModule`\[`"genPure"`\]\>\[`1`\]

## Returns

`Function`

### Type Parameters

• **T**

### Parameters

#### arr

readonly `T`[]

### Returns

[`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>
