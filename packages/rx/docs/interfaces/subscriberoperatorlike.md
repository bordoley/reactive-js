[@reactive-js/rx](../README.md) › [SubscriberOperatorLike](subscriberoperatorlike.md)

# Interface: SubscriberOperatorLike <**A, B**>

A function which transforms a `SubscriberLike<B>` to a `SubscriberLike<A>`.

## Type parameters

▪ **A**

▪ **B**

## Hierarchy

* **SubscriberOperatorLike**

## Index

### Properties

* [isSynchronous](subscriberoperatorlike.md#issynchronous)

### Methods

* [call](subscriberoperatorlike.md#call)

## Properties

###  isSynchronous

• **isSynchronous**: *boolean*

Flag that indicates that the transformed `SubscriberLike` synchronously
transforms notifications, without introducing delays.

## Methods

###  call

▸ **call**(`subscriber`: [SubscriberLike](subscriberlike.md)‹B›): *[SubscriberLike](subscriberlike.md)‹A›*

Transforms the `SubscriberLike<B>` to a `SubscriberLike<A>`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subscriber` | [SubscriberLike](subscriberlike.md)‹B› | The subscriber to transform.  |

**Returns:** *[SubscriberLike](subscriberlike.md)‹A›*
