[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / PickOperator

# Interface: PickOperator()\<TComputation\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

> **PickOperator**\<`T`, `TKeyOfT`\>(`key`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\[`TKeyOfT`\]\>

## Type Parameters

• **T**

• **TKeyOfT** *extends* `string` \| `number` \| `symbol`

## Parameters

### key

`TKeyOfT`

## Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\[`TKeyOfT`\]\>

> **PickOperator**\<`T`, `TKeyOfTA`, `TKeyOfTB`\>(`keyA`, `keyB`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\[`TKeyOfTA`\]\[`TKeyOfTB`\]\>

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

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\[`TKeyOfTA`\]\[`TKeyOfTB`\]\>

> **PickOperator**\<`T`, `TKeyOfTA`, `TKeyOfTB`, `TKeyOfTC`\>(`keyA`, `keyB`, `keyC`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\[`TKeyOfTA`\]\[`TKeyOfTB`\]\[`TKeyOfTC`\]\>

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

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\[`TKeyOfTA`\]\[`TKeyOfTB`\]\[`TKeyOfTC`\]\>
