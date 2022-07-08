[Reactive-JS](../README.md) / enumerableObservable

# Module: enumerableObservable

## Table of contents

### Interfaces

- [EnumerableObservableLike](../interfaces/enumerableObservable.EnumerableObservableLike.md)

### Variables

- [toEnumerableT](enumerableObservable.md#toenumerablet)
- [toRunnableT](enumerableObservable.md#torunnablet)

### Functions

- [toEnumerable](enumerableObservable.md#toenumerable)
- [toRunnable](enumerableObservable.md#torunnable)

## Variables

### toEnumerableT

• `Const` **toEnumerableT**: [`ToEnumerable`](../interfaces/enumerable.ToEnumerable.md)<[`EnumerableObservableLike`](../interfaces/enumerableObservable.EnumerableObservableLike.md)<`unknown`\>\>

___

### toRunnableT

• `Const` **toRunnableT**: [`ToRunnable`](../interfaces/runnable.ToRunnable.md)<[`EnumerableObservableLike`](../interfaces/enumerableObservable.EnumerableObservableLike.md)<`unknown`\>\>

## Functions

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/enumerableObservable.EnumerableObservableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/enumerableObservable.EnumerableObservableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/enumerableObservable.EnumerableObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/enumerableObservable.EnumerableObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>
