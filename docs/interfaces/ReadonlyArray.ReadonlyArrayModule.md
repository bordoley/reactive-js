[Reactive-JS](../README.md) / [ReadonlyArray](../modules/ReadonlyArray.md) / ReadonlyArrayModule

# Interface: ReadonlyArrayModule

[ReadonlyArray](../modules/ReadonlyArray.md).ReadonlyArrayModule

## Hierarchy

- [`ConcreteKeyedContainerModule`](types.ConcreteKeyedContainerModule.md)<[`Type`](../modules/ReadonlyArray.md#type)\>

- `Omit`<[`EnumerableContainerModule`](types.EnumerableContainerModule.md)<[`Type`](../modules/ReadonlyArray.md#type)\>, keyof [`ConcreteKeyedContainerModule`](types.ConcreteKeyedContainerModule.md)<[`Type`](../modules/ReadonlyArray.md#type)\>\>

  ↳ **`ReadonlyArrayModule`**

## Table of contents

### Operator Methods

- [flatMapIterable](ReadonlyArray.ReadonlyArrayModule.md#flatmapiterable)
- [keepType](ReadonlyArray.ReadonlyArrayModule.md#keeptype)

### Other Methods

- [fromIterable](ReadonlyArray.ReadonlyArrayModule.md#fromiterable)

### Transform Methods

- [enumerate](ReadonlyArray.ReadonlyArrayModule.md#enumerate)
- [toIterable](ReadonlyArray.ReadonlyArrayModule.md#toiterable)
- [toObservable](ReadonlyArray.ReadonlyArrayModule.md#toobservable)
- [toReadonlyArray](ReadonlyArray.ReadonlyArrayModule.md#toreadonlyarray)

## Operator Methods

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`Function1`](../modules/functions.md#function1)<readonly `TA`[], readonly `TB`[]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `TA`[], readonly `TB`[]\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`\>

#### Overrides

[ConcreteKeyedContainerModule](types.ConcreteKeyedContainerModule.md).[keepType](types.ConcreteKeyedContainerModule.md#keeptype)

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

#### Overrides

ConcreteKeyedContainerModule.keepType

___

## Other Methods

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, readonly `T`[]\>

___

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Overrides

Omit.enumerate

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], `Iterable`<`T`\>\>

#### Overrides

Omit.toIterable

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

Omit.toObservable

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

Omit.toObservable

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count` | `number` |
| `options.start` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

Omit.toObservable

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.start` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

Omit.toObservable

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], readonly `T`[]\>

#### Overrides

Omit.toReadonlyArray
