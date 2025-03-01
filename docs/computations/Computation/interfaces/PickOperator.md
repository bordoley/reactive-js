[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / PickOperator

# Interface: PickOperator()\<Type, TComputation\>

## Type Parameters

• **Type** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

> **PickOperator**\<`T`, `TKeyOfT`\>(`key`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\[`TKeyOfT`\]\>

## Type Parameters

• **T**

• **TKeyOfT** *extends* `string` \| `number` \| `symbol`

## Parameters

### key

`TKeyOfT`

## Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\[`TKeyOfT`\]\>

> **PickOperator**\<`T`, `TKeyOfTA`, `TKeyOfTB`\>(`keyA`, `keyB`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\[`TKeyOfTA`\]\[`TKeyOfTB`\]\>

## Type Parameters

• **T**

• **TKeyOfTA** *extends* `string` \| `number` \| `symbol`

• **TKeyOfTB** *extends* `string` \| `number` \| `symbol`

## Parameters

### keyA

`TKeyOfTA`

### keyB

`TKeyOfTB`

## Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\[`TKeyOfTA`\]\[`TKeyOfTB`\]\>

> **PickOperator**\<`T`, `TKeyOfTA`, `TKeyOfTB`, `TKeyOfTC`\>(`keyA`, `keyB`, `keyC`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\[`TKeyOfTA`\]\[`TKeyOfTB`\]\[`TKeyOfTC`\]\>

## Type Parameters

• **T**

• **TKeyOfTA** *extends* `string` \| `number` \| `symbol`

• **TKeyOfTB** *extends* `string` \| `number` \| `symbol`

• **TKeyOfTC** *extends* `string` \| `number` \| `symbol`

## Parameters

### keyA

`TKeyOfTA`

### keyB

`TKeyOfTB`

### keyC

`TKeyOfTC`

## Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\[`TKeyOfTA`\]\[`TKeyOfTB`\]\[`TKeyOfTC`\]\>
