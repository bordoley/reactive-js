[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ScanMany

# Interface: ScanMany<C\>

[rx](../modules/rx.md).ScanMany

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container.md) |

## Table of contents

### Operator Properties

- [scanMany](rx.ScanMany.md#scanmany)

## Operator Properties

### scanMany

• **scanMany**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TAcc`\>

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
