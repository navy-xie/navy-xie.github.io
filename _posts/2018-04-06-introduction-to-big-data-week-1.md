---
layout: post
title: Introduction to Big Data - Week 1
date: 2018-04-05 20:00:00
tags: Big Data
---

> 最近在 [Coursera](https://www.coursera.org) 上学习一门大数据相关的课程 [Introduction to Big Data](https://www.coursera.org/learn/big-data-introduction/home/info)，选择这门课的初衷是，希望系统地了解从数据产生，存储，清理，到输入到机器学习模型，再到用于预测或分析整个过程。

### 课程背景

制作学校是: _University of California, San Diego_，两位老师是:
- [Ilkay Altintas](https://www.coursera.org/instructor/~3457480), Chief Data Science Officer
- [Amarnath Gupta](https://www.coursera.org/instructor/~13855068), Director, Advanced Query Processing Lab

2位老师都在 *San Diego Supercomputer Center (SDSC)* 工作，可见具有丰富的学术背景和应用背景，这也是我选择这门课的一个主要原因。

另外值得一提的是，这门课属于一个Specialization（专题）中的第一门课。如果不熟悉Coursera上Specialization的概念，我这里简要介绍一下。就拿这门而言，_Introduction to Big Data_ 是一个Course，包含3 weeks的课，同时，还有其它共6个courses组成了这个[Big Data Specialization](https://www.coursera.org/specializations/big-data)，这6 courses分别是：

1. Introduction to Big Data (3 weeks)
2. Big Data Modeling and Management Systems (6 weeks)
3. Big Data Integreation and Processing
4. Machine Learning with Big Data (5 weeks)
5. Graph Analytics for Big Data (4 weeks)
6. Big Data - Capstone Project

从课程名称，以及课程大纲的描述中可见，如果学完这个Specialization，可以对Big Data这个领域有个系统、全面的了解。我之前花了几个月，完成了另一个[Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning), 也是收获很大。

### Week 1

因为这门课，包括这个专题的目标学生是beginner，所以内容相对比较基础。在这一周里，主要介绍了Big Data是什么，以及可以用来做什么，工作流程，以及一些术语.

- 介绍大数据的组成，其中 _unstructured_  占80%到90%
- Data warehouse，通常使用hadoop / spark / storm
- 三大数据源：机器、组织和人
- 图数据库， _Neo4J_
- 大数据metric

| Value | Metric             |
| ------ | ----------------- |
| 1000   | KB kilobyte|
| 1000^2 | MB megabyte|
| 1000^3 | GB gigabyte|
| 1000^4 | TB terabyte|
| 1000^5 | PB petabyte|
| 1000^6 | EB exabyte|
| 1000^7 | ZB zettabyte|
| 1000^8 | YB yottabyte|

- the workflow for working with big data:
    big data -> better models -> higher precision

- in situ: bringing the computation to the location of the data

- What does it mean for a device to be "smart"?
 Connect with other devices and have knowledge of the environment.

讲师 _Ilkay_ 还讲述了大量Big Data在现实生活的使用案例，比如结合sensor，卫星照片，社交媒体等数据源，发现和定位森林火警。

讲师 _Amarnath_ 讲述了结合社交媒体数据分析的难度，但是可能带来的有趣前景：what new answers we could give, and what new questions we could ask.

### 小结

第一周主要是讲了什么大数据，以及通常用来解决什么问题。
延伸阅读：[25 facts about big data](http://www.slideshare.net/BernardMarr/big-data-25-facts/).
