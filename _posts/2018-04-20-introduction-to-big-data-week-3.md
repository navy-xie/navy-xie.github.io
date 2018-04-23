---
layout: post
title: Introduction to Big Data - Week 3
date: 2018-04-20 20:30:00
tags: Big Data
---

### Basic Scalable Computing Concepts

The commodity clusters are a cost effective way of achieving data parallel scalability for big data applications.

Programming model for big data
->
Programmability on top of DFS (Distributed File Systems)

#### Requirements for big data programming models

1. Support big data operation
split volumes fo data
access data fast
distribute computations to nodes

2. Handle fault tolerance
replicate data partitions
recover files when needed

3. Enable adding more racks
4. Optimized for specific data types

#### Fault-tolerance

It is NOT practical to restart everything every time, if failure happens.
The ability to recover from such failures is called Fault-tolerance.
Two neat solutions emerged.
Namely, 
* Redundant data storage
* Data-parallel job restart

#### Quote

在讲Foundation重要的原因时，Dr. Ilkay提到了David Allan的名言：

![Quote about foundation](/assets/images/introduction-to-big-data/quote-foundation.png "Quote about foundation")

“我们在欣赏一个建筑物时，不应只是去看它的美，经得住时间考验的，是它的基础结构。”
意思是说，不要光是被外表的东西吸引，要去研究它的基础。这里引用这句话的目的是说，不要仅看到Hadoop表面的东西，要去理解它的基础功能，要解决的基本问题，比如，大数据操作、容错、增加Rack，以及数据类型优化等。
那么这个 [David Allan Coe](https://en.wikipedia.org/wiki/David_Allan_Coe) 又是何许人也呢？

![David Allan Coe](/assets/images/introduction-to-big-data/david-allan-coe.jpg "David Allan Coe")

David是美国70-80年代有名的音乐人，从图片中可以看到浓浓的年代气息，金色长发、链子、吉他、纹身。我找了几首他的歌听了一下，如，`Mona Lisa Lost Her Smile`，`She Used to Love Me a Lot`， 属于 `blues` 和 `country music` 风格，挺好听的。他也曾演绎过那首经典的 `Unchained Melody`，跟我们听的比较多的 [Bobby Hatfield](https://en.wikipedia.org/wiki/Bobby_Hatfield) 版风格很不同。

### Getting Started with Hadoop



### Quiz

**What are the specific benefits to a distributed file system? (A, B, C)**

    A. Data scalability
    B. High concurrency
    C. High fault tolerance
    D. Large storage (This is NOT a benefit specific to DFS, it is a benefit to long-term information storage, which is a more general idea.)

**What is a way to enable fault tolerance? (C)**

    A. Distributed computing
    B. Better LAN connection
    C. Data-parallel job restart
    D. System wide restart

