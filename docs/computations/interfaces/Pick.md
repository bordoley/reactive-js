[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / Pick

# Interface: Pick()\<C\>

## Type Parameters

• **C** *extends* [`Computation`](Computation.md)

> **Pick**\<`T`, `TKeyOfT`\>(`key`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\[`TKeyOfT`\]\>

## Type Parameters

• **T**

• **TKeyOfT** *extends* `string` \| `number` \| `symbol`

## Parameters

### key

`TKeyOfT`

## Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\[`TKeyOfT`\]\>

> **Pick**\<`T`, `TKeyOfTA`, `TKeyOfTB`\>(`keyA`, `keyB`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\[`TKeyOfTA`\]\[`TKeyOfTB`\]\>

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

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\[`TKeyOfTA`\]\[`TKeyOfTB`\]\>

> **Pick**\<`T`, `TKeyOfTA`, `TKeyOfTB`, `TKeyOfTC`\>(`keyA`, `keyB`, `keyC`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\[`TKeyOfTA`\]\[`TKeyOfTB`\]\[`TKeyOfTC`\]\>

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

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\[`TKeyOfTA`\]\[`TKeyOfTB`\]\[`TKeyOfTC`\]\>
