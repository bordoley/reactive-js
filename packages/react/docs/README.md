[@reactive-js/react](README.md)

# @reactive-js/react

## Index

### Functions

* [useAsyncEnumerable](README.md#const-useasyncenumerable)
* [useAsyncEnumerator](README.md#const-useasyncenumerator)
* [useObservable](README.md#const-useobservable)

## Functions

### `Const` useAsyncEnumerable

▸ **useAsyncEnumerable**<**TReq**, **T**>(`iterable`: AsyncEnumerableLike‹TReq, T›, `config`: object): *AsyncEnumeratorResourceLike‹TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`iterable` | AsyncEnumerableLike‹TReq, T› | - |
`config` | object |  {} |

**Returns:** *AsyncEnumeratorResourceLike‹TReq, T›*

___

### `Const` useAsyncEnumerator

▸ **useAsyncEnumerator**<**TReq**, **T**>(`enumerator`: AsyncEnumeratorLike‹TReq, T›, `scheduler?`: SchedulerLike): *[T | undefined, function]*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`enumerator` | AsyncEnumeratorLike‹TReq, T› |
`scheduler?` | SchedulerLike |

**Returns:** *[T | undefined, function]*

___

### `Const` useObservable

▸ **useObservable**<**T**>(`observable`: ObservableLike‹T›, `scheduler`: SchedulerLike): *T | undefined*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`observable` | ObservableLike‹T› | - |
`scheduler` | SchedulerLike |  normalPriority |

**Returns:** *T | undefined*
