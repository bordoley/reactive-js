[@reactive-js/rx](../README.md) › [DelegatingSubscriber](delegatingsubscriber.md)

# Class: DelegatingSubscriber <**TA, TB**>

Abstract base class for implementing SubscriberOperatorLikes.

## Type parameters

▪ **TA**

▪ **TB**

## Hierarchy

* Subscriber‹TA›

  ↳ **DelegatingSubscriber**

## Implements

* [SubscriberLike](../interfaces/subscriberlike.md)‹TA›

## Index

### Constructors

* [constructor](delegatingsubscriber.md#constructor)

### Properties

* [delegate](delegatingsubscriber.md#delegate)

## Constructors

###  constructor

\+ **new DelegatingSubscriber**(`delegate`: [SubscriberLike](../interfaces/subscriberlike.md)‹TB›): *[DelegatingSubscriber](delegatingsubscriber.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | [SubscriberLike](../interfaces/subscriberlike.md)‹TB› |

**Returns:** *[DelegatingSubscriber](delegatingsubscriber.md)*

## Properties

###  delegate

• **delegate**: *[SubscriberLike](../interfaces/subscriberlike.md)‹TB›*
