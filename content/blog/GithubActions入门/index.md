---
title: GitHub Actions 入门
date: "2021-04-12T11:11:23.284Z"
tags: 
- DevOps
- Github
categories:
- DevOps
description: 借助 GitHub Actions，可以直接从 GitHub 构建、测试和部署代码，轻松实现所有软件工作流程的自动化。 
---

这个博客站是我自己用 Gatsby 随便拼凑了一下造出来的，前几天发现好久都没有更新博客了，心里还是很愧疚的🤣，那就更新一篇吧。

之前用 Gatsby 写博客要么是在 OS 系统下，要么是在 Linux 系统下，从来没用过 Windows。但是由于工作环境的变化，手头只有 Windows 可用，讲道理这种纯前端该没什么平台限制，但是在我一通 `npm` 命令之后，博客并没有按照我的预期正常跑起来，这里不对这个问题做深究（Windows 文件路径大小写不敏感，而且盘符根目录都是大写字母 C D E，会导致 Gatsby 脚手架部分功能异常）。

经过一番努力之后，终于正常跑起来了，但是由于使用的 Windows 系统配置特别差，CPU 动不动就要飙到 100%，Gatsby 最终生成静态站点的过程及其痛苦。

由于所在网络环境的问题，最终将生成的静态内容推送到 Github Pages 服务的过程也是很糟心😢。

遂决定，使用 Github Actions 自动打包自动部署。趁有空花了一下午时间，把 Github Lab 中的 Github actions 的内容都过了一遍，这里就做个简单的记录。

## Github Actions 简介

> Automate, customize, and execute your software development workflows right in your repository with GitHub Actions. You can discover, create, and share actions to perform any job you'd like, including CI/CD, and combine actions in a completely customized workflow.

Github Actions 可以粗略的理解为集成在 Github 中的 CI/CD 服务， 和 Jenkins、Travis CI 等类似。

![ci/cd](./cicd.png)

Github Actions 目前可以用来做以下这些事情：
* 自动化测试（持续集成）
* 持续交付和部署
* 触发 Code Review
* 管理分支
* 分类 Issue 和 PR

由于是集成在 Github 中的，我们不需要自己购买以及配置相关的构建服务器，Github 本身就提供了云环境供大家使用。

## 使用步骤

