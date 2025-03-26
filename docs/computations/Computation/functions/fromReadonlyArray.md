[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / fromReadonlyArray

# Function: fromReadonlyArray()

> **fromReadonlyArray**\<`TComputationModule`\>(`m`): \<`T`\>(`options`?) => [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>\>

## Type Parameters

• **TComputationModule** *extends* `Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, *typeof* [`ComputationModuleLike_computationType`](../../variables/ComputationModuleLike_computationType.md) \| `"genPure"`\>

## Parameters

### m

`TComputationModule`

## Returns

`Function`

### Type Parameters

• **T**

### Parameters

#### options?

`object` & `Parameters`\<`TComputationModule`\[`"genPure"`\]\>\[`1`\]

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>\>
