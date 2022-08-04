[Reactive-JS](../README.md) / ix

# Module: ix

## Table of contents

### Interfaces

- [AsyncEnumerableLike](../interfaces/ix.AsyncEnumerableLike.md)
- [EnumerableLike](../interfaces/ix.EnumerableLike.md)
- [InteractiveContainerLike](../interfaces/ix.InteractiveContainerLike.md)

### Type Aliases

- [ToEnumerable](ix.md#toenumerable)

### Variables

- [createEnumerableUsingT](ix.md#createenumerableusingt)
- [emptyEnumerableT](ix.md#emptyenumerablet)
- [generateEnumerableT](ix.md#generateenumerablet)

### Functions

- [createEnumerable](ix.md#createenumerable)
- [createEnumerableUsing](ix.md#createenumerableusing)
- [emptyEnumerable](ix.md#emptyenumerable)
- [generateEnumerable](ix.md#generateenumerable)

## Type Aliases

### ToEnumerable

Ƭ **ToEnumerable**<`C`, `TOptions`\>: [`Container`](containers.md#container)<`C`\> & { `toEnumerable`: <T\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TOptions` | `never` |

## Variables

### createEnumerableUsingT

• `Const` **createEnumerableUsingT**: [`Using`](containers.md#using)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>\>

___

### emptyEnumerableT

• `Const` **emptyEnumerableT**: [`Empty`](containers.md#empty)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### generateEnumerableT

• `Const` **generateEnumerableT**: [`Generate`](containers.md#generate)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

## Functions

### createEnumerable

▸ **createEnumerable**<`T`\>(`f`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/util.EnumeratorLike.md)<`T`\>\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

___

### createEnumerableUsing

▸ **createEnumerableUsing**<`TResource`, `T`\>(`resourceFactory`, `containerFactory`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource`\> |
| `containerFactory` | [`Function1`](functions.md#function1)<`TResource`, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

▸ **createEnumerableUsing**<`TResource1`, `TResource2`, `T`\>(`resourceFactory`, `containerFactory`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`]\> |
| `containerFactory` | [`Function2`](functions.md#function2)<`TResource1`, `TResource2`, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

▸ **createEnumerableUsing**<`TResource1`, `TResource2`, `TResource3`, `T`\>(`resourceFactory`, `containerFactory`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`]\> |
| `containerFactory` | [`Function3`](functions.md#function3)<`TResource1`, `TResource2`, `TResource3`, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

▸ **createEnumerableUsing**<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `T`\>(`resourceFactory`, `containerFactory`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource4` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`]\> |
| `containerFactory` | [`Function4`](functions.md#function4)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

▸ **createEnumerableUsing**<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, `T`\>(`resourceFactory`, `containerFactory`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource4` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResource5` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`]\> |
| `containerFactory` | [`Function5`](functions.md#function5)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

▸ **createEnumerableUsing**<`TResource`, `T`\>(`resourceFactory`, `runnableFactory`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource` \| readonly `TResource`[]\> |
| `runnableFactory` | (...`resources`: readonly `TResource`[]) => [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

___

### emptyEnumerable

▸ **emptyEnumerable**<`T`\>(`options?`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

___

### generateEnumerable

▸ **generateEnumerable**<`T`\>(`generator`, `initialValue`, `options?`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

Generates an EnumerableLike from a generator function
that is applied to an accumulator value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> | the generator function. |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |
| `options?` | `undefined` | - |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>
