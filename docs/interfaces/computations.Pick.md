[Reactive-JS](../README.md) / [computations](../modules/computations.md) / Pick

# Interface: Pick\<C\>

[computations](../modules/computations.md).Pick

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](computations.Computation.md) |

## Callable

### Pick

▸ **Pick**\<`T`, `TKeyOfT`\>(`key`): [`ComputationOperator`](../modules/computations.md#computationoperator)\<`C`, `T`, `T`[`TKeyOfT`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyOfT` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKeyOfT` |

#### Returns

[`ComputationOperator`](../modules/computations.md#computationoperator)\<`C`, `T`, `T`[`TKeyOfT`]\>

### Pick

▸ **Pick**\<`T`, `TKeyOfTA`, `TKeyOfTB`\>(`keyA`, `keyB`): [`ComputationOperator`](../modules/computations.md#computationoperator)\<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyOfTA` | extends `string` \| `number` \| `symbol` |
| `TKeyOfTB` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyOfTA` |
| `keyB` | `TKeyOfTB` |

#### Returns

[`ComputationOperator`](../modules/computations.md#computationoperator)\<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`]\>

### Pick

▸ **Pick**\<`T`, `TKeyOfTA`, `TKeyOfTB`, `TKeyOfTC`\>(`keyA`, `keyB`, `keyC`): [`ComputationOperator`](../modules/computations.md#computationoperator)\<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`][`TKeyOfTC`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyOfTA` | extends `string` \| `number` \| `symbol` |
| `TKeyOfTB` | extends `string` \| `number` \| `symbol` |
| `TKeyOfTC` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyOfTA` |
| `keyB` | `TKeyOfTB` |
| `keyC` | `TKeyOfTC` |

#### Returns

[`ComputationOperator`](../modules/computations.md#computationoperator)\<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`][`TKeyOfTC`]\>
