[@reactive-js/rx](../README.md) › [SubscriberOperatorLike](subscriberoperatorlike.md)

# Interface: SubscriberOperatorLike <**A, B**>

A function with transforms a SubscriberLike<B> to a SubscriberLike<A>.

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

## Methods

###  call

▸ **call**(`subscriber`: [SubscriberLike](subscriberlike.md)‹B›): *[SubscriberLike](subscriberlike.md)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [SubscriberLike](subscriberlike.md)‹B› |

**Returns:** *[SubscriberLike](subscriberlike.md)‹A›*
