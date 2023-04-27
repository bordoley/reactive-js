[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ScanLast

# Interface: ScanLast<C\>

[rx](../modules/rx.md).ScanLast

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Table of contents

### Operator Properties

- [scanLast](rx.ScanLast.md#scanlast)

## Operator Properties

### scanLast

• **scanLast**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TAcc`\>
