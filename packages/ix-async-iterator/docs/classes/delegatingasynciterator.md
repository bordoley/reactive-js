[@reactive-js/ix-async-iterator](../README.md) › [DelegatingAsyncIterator](delegatingasynciterator.md)

# Class: DelegatingAsyncIterator <**TReq, T**>

## Type parameters

▪ **TReq**

▪ **T**

## Hierarchy

* **DelegatingAsyncIterator**

## Implements

* [AsyncIteratorLike](../interfaces/asynciteratorlike.md)‹TReq, T›

## Index

### Constructors

* [constructor](delegatingasynciterator.md#constructor)

### Properties

* [dispatcher](delegatingasynciterator.md#dispatcher)
* [observable](delegatingasynciterator.md#observable)

### Methods

* [dispatch](delegatingasynciterator.md#dispatch)
* [subscribe](delegatingasynciterator.md#subscribe)

## Constructors

###  constructor

\+ **new DelegatingAsyncIterator**(`observable`: ObservableLike‹T›, `dispatcher`: function): *[DelegatingAsyncIterator](delegatingasynciterator.md)*

**Parameters:**

▪ **observable**: *ObservableLike‹T›*

▪ **dispatcher**: *function*

▸ (`req`: TReq): *void*

**Parameters:**

Name | Type |
------ | ------ |
`req` | TReq |

**Returns:** *[DelegatingAsyncIterator](delegatingasynciterator.md)*

## Properties

###  dispatcher

• **dispatcher**: *function*

#### Type declaration:

▸ (`req`: TReq): *void*

**Parameters:**

Name | Type |
------ | ------ |
`req` | TReq |

___

###  observable

• **observable**: *ObservableLike‹T›*

## Methods

###  dispatch

▸ **dispatch**(`req`: TReq): *void*

*Implementation of [AsyncIteratorLike](../interfaces/asynciteratorlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`req` | TReq |

**Returns:** *void*

___

###  subscribe

▸ **subscribe**(`subscriber`: SubscriberLike‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | SubscriberLike‹T› |

**Returns:** *void*
