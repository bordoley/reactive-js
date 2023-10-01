[Reactive-JS](../README.md) / computation

# Module: computation

## Table of contents

### Computation Interfaces

- [Computation](../interfaces/computation.Computation.md)

### Module Interfaces

- [PureComputationModule](../interfaces/computation.PureComputationModule.md)

### Type Aliases

- [ComputationOf](computation.md#computationof)
- [PureComputationOperator](computation.md#purecomputationoperator)

### Variables

- [Computation\_T](computation.md#computation_t)
- [Computation\_type](computation.md#computation_type)

### Functions

- [keepType](computation.md#keeptype)
- [mapTo](computation.md#mapto)
- [pick](computation.md#pick)

## Type Aliases

### ComputationOf

Ƭ **ComputationOf**<`C`, `T`\>: `C` extends { `[Computation_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[Computation_T]`: `T`  }[typeof [`Computation_type`](computation.md#computation_type)]\> : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computation.Computation.md) |
| `T` | `T` |

___

### PureComputationOperator

Ƭ **PureComputationOperator**<`C`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`ComputationOf`](computation.md#computationof)<`C`, `TA`\>, [`ComputationOf`](computation.md#computationof)<`C`, `TB`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computation.Computation.md) |
| `TA` | `TA` |
| `TB` | `TB` |

## Variables

### Computation\_T

• `Const` **Computation\_T**: unique `symbol`

___

### Computation\_type

• `Const` **Computation\_type**: unique `symbol`

## Functions

### keepType

▸ **keepType**<`C`, `TA`, `TB`\>(`m`, `predicate`): [`PureComputationOperator`](computation.md#purecomputationoperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computation.Computation.md) |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Pick`<[`PureComputationModule`](../interfaces/computation.PureComputationModule.md)<`C`\>, ``"keep"``\> |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`PureComputationOperator`](computation.md#purecomputationoperator)<`C`, `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`C`, `T`\>(`m`, `value`): [`PureComputationOperator`](computation.md#purecomputationoperator)<`C`, `unknown`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computation.Computation.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Pick`<[`PureComputationModule`](../interfaces/computation.PureComputationModule.md)<`C`\>, ``"map"``\> |
| `value` | `T` |

#### Returns

[`PureComputationOperator`](computation.md#purecomputationoperator)<`C`, `unknown`, `T`\>

___

### pick

▸ **pick**<`C`, `T`, `TKeyOfT`\>(`m`, `key`): [`PureComputationOperator`](computation.md#purecomputationoperator)<`C`, `T`, `T`[`TKeyOfT`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computation.Computation.md) |
| `T` | `T` |
| `TKeyOfT` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Pick`<[`PureComputationModule`](../interfaces/computation.PureComputationModule.md)<`C`\>, ``"map"``\> |
| `key` | `TKeyOfT` |

#### Returns

[`PureComputationOperator`](computation.md#purecomputationoperator)<`C`, `T`, `T`[`TKeyOfT`]\>

▸ **pick**<`C`, `T`, `TKeyOfTA`, `TKeyOfTB`\>(`m`, `keyA`, `keyB`): [`PureComputationOperator`](computation.md#purecomputationoperator)<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computation.Computation.md) |
| `T` | `T` |
| `TKeyOfTA` | extends `string` \| `number` \| `symbol` |
| `TKeyOfTB` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Pick`<[`PureComputationModule`](../interfaces/computation.PureComputationModule.md)<`C`\>, ``"map"``\> |
| `keyA` | `TKeyOfTA` |
| `keyB` | `TKeyOfTB` |

#### Returns

[`PureComputationOperator`](computation.md#purecomputationoperator)<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`]\>

▸ **pick**<`C`, `T`, `TKeyOfTA`, `TKeyOfTB`, `TKeyOfTC`\>(`m`, `keyA`, `keyB`, `keyC`): [`PureComputationOperator`](computation.md#purecomputationoperator)<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`][`TKeyOfTC`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](../interfaces/computation.Computation.md) |
| `T` | `T` |
| `TKeyOfTA` | extends `string` \| `number` \| `symbol` |
| `TKeyOfTB` | extends `string` \| `number` \| `symbol` |
| `TKeyOfTC` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Pick`<[`PureComputationModule`](../interfaces/computation.PureComputationModule.md)<`C`\>, ``"map"``\> |
| `keyA` | `TKeyOfTA` |
| `keyB` | `TKeyOfTB` |
| `keyC` | `TKeyOfTC` |

#### Returns

[`PureComputationOperator`](computation.md#purecomputationoperator)<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`][`TKeyOfTC`]\>
