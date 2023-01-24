[Reactive-JS](../README.md) / containers/ReadonlyArrayLike

# Module: containers/ReadonlyArrayLike

## Table of contents

### Functions

- [empty](containers_ReadonlyArrayLike.md#empty)
- [every](containers_ReadonlyArrayLike.md#every)
- [forEach](containers_ReadonlyArrayLike.md#foreach)
- [fromArray](containers_ReadonlyArrayLike.md#fromarray)
- [fromAsyncEnumerable](containers_ReadonlyArrayLike.md#fromasyncenumerable)
- [fromEnumerable](containers_ReadonlyArrayLike.md#fromenumerable)
- [fromEnumerableObservable](containers_ReadonlyArrayLike.md#fromenumerableobservable)
- [fromSequence](containers_ReadonlyArrayLike.md#fromsequence)
- [keep](containers_ReadonlyArrayLike.md#keep)
- [map](containers_ReadonlyArrayLike.md#map)
- [some](containers_ReadonlyArrayLike.md#some)
- [toEnumerable](containers_ReadonlyArrayLike.md#toenumerable)
- [toEnumerableObservable](containers_ReadonlyArrayLike.md#toenumerableobservable)
- [toObservable](containers_ReadonlyArrayLike.md#toobservable)
- [toReadonlyArray](containers_ReadonlyArrayLike.md#toreadonlyarray)
- [toRunnable](containers_ReadonlyArrayLike.md#torunnable)
- [toRunnableObservable](containers_ReadonlyArrayLike.md#torunnableobservable)
- [toSequence](containers_ReadonlyArrayLike.md#tosequence)

## Functions

### empty

▸ **empty**<`T`\>(`options?`): [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>

___

### every

▸ **every**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `count`: `number` ; `start`: `number`  }\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromAsyncEnumerable

▸ **fromAsyncEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromEnumerableObservable

▸ **fromEnumerableObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.schedulerFactory` | [`Factory`](functions.md#factory)<[`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromSequence

▸ **fromSequence**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `TA`, `TB`\>

___

### some

▸ **some**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, `boolean`\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count` | `number` |
| `options.start` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

___

### toEnumerableObservable

▸ **toEnumerableObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `count`: `number` ; `start`: `number`  }\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

___

### toRunnableObservable

▸ **toRunnableObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `count?`: `number` ; `delay?`: `number` ; `delayStart?`: `boolean` ; `start?`: `number`  }\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

___

### toSequence

▸ **toSequence**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>\>
