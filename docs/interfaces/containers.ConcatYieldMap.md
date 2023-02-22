[Reactive-JS](../README.md) / [containers](../modules/containers.md) / ConcatYieldMap

# Interface: ConcatYieldMap<C, O\>

[containers](../modules/containers.md).ConcatYieldMap

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ConcatYieldMap`**

## Table of contents

### Operator Properties

- [concatYieldMap](containers.ConcatYieldMap.md#concatyieldmap)

## Operator Properties

### concatYieldMap

• **concatYieldMap**: <TA, TB\>(`mapper`: [`Function1`](../modules/functions.md#function1)<`TA`, `Generator`<`TB`, `any`, `any`\>\>, `options?`: `O`) => [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](../modules/functions.md#function1)<`TA`, `Generator`<`TB`, `any`, `any`\>\> |
| `options?` | `O` |

##### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>
