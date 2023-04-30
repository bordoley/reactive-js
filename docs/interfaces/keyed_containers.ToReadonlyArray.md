[Reactive-JS](../README.md) / [keyed-containers](../modules/keyed_containers.md) / ToReadonlyArray

# Interface: ToReadonlyArray<C\>

[keyed-containers](../modules/keyed_containers.md).ToReadonlyArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyed_containers.KeyedContainerLike.md) |

## Table of contents

### Transform Methods

- [toReadonlyArray](keyed_containers.ToReadonlyArray.md#toreadonlyarray)

## Transform Methods

### toReadonlyArray

▸ **toReadonlyArray**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>, readonly `T`[]\>

Converts the ContainerLike to a `ReadonlyArrayContainerLike`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyed_containers.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>, readonly `T`[]\>
