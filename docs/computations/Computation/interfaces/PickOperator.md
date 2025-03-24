[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / PickOperator

# Interface: PickOperator()\<TComputationType\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

> **PickOperator**\<`T`, `TKeyOfT`\>(`key`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\[`TKeyOfT`\]\>

## Type Parameters

• **T**

• **TKeyOfT** *extends* `string` \| `number` \| `symbol`

## Parameters

### key

`TKeyOfT`

## Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\[`TKeyOfT`\]\>

> **PickOperator**\<`T`, `TKeyOfTA`, `TKeyOfTB`\>(`keyA`, `keyB`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\[`TKeyOfTA`\]\[`TKeyOfTB`\]\>

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

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\[`TKeyOfTA`\]\[`TKeyOfTB`\]\>

> **PickOperator**\<`T`, `TKeyOfTA`, `TKeyOfTB`, `TKeyOfTC`\>(`keyA`, `keyB`, `keyC`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\[`TKeyOfTA`\]\[`TKeyOfTB`\]\[`TKeyOfTC`\]\>

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

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\[`TKeyOfTA`\]\[`TKeyOfTB`\]\[`TKeyOfTC`\]\>
