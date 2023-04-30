[Reactive-JS](../README.md) / [keyed-containers](../modules/keyed_containers.md) / ToReadonlyArray

# Interface: ToReadonlyArray<C\>

[keyed-containers](../modules/keyed_containers.md).ToReadonlyArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](keyed_containers.KeyedContainer.md) |

## Table of contents

### Transform Methods

- [toReadonlyArray](keyed_containers.ToReadonlyArray.md#toreadonlyarray)

## Transform Methods

### toReadonlyArray

▸ **toReadonlyArray**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyed_containers.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>, readonly `T`[]\>
