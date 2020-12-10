---
title: Drug Explorer
date: '2020-12-01'
image: images/drug-explorer.jpg
categories:
  - data/categories/demo.yaml
excerpt: 'Get relevant information about drugs from FDA, Dailymed and other databases.'
sections:
  - type: hero_section
    title: Drug Explorer
    subtitle: >-
      Get relevant information about drugs from FDA, Dailymed and other
      databases.
    actions:
      - label: Live Demo
        url: 'http://134.122.26.41:3000'
        style: primary
    align: left
    image: images/drug_hero.png
    image_position: right
    has_background: true
    background:
      background_color: blue
      background_image: images/diagonal-lines.svg
      background_image_opacity: 20
      background_image_size: auto
      background_image_repeat: repeat
  - type: features_section
    title: Features
    features:
      - title: Search approved FDA drug
        content: >-
          Using the generic name of a drug as keyword, compose a query with the 
          available attributes using the model explorer, the search is peform in an Elastic Search instance. 
        align: left
        image: images/drug-f-1.png
        image_position: right
      - title: Auto Generated TOC
        content: >-
          Browse the result content with an auto generated TOC, the results are rendered from a JSON resonse, meaning it will be easy to integrate in an extisting frontend.
        align: left
        image: images/drug-f-2.png
        image_position: left
      - title: Explore Dailymed Labels
        content: >-
         Images matching the result will be included from Dailymed drug labels, packaging, chemical structure, among other assets.
         These assets could be collected on demand or using a pipeline which persist the images a storage.
        align: left
        image: images/drug-f-3.png
        image_position: right
  - type: cta_section
    title: Drug Explorer
    subtitle: >-
      Make sure you are connected to Globant's VPN
    actions:
      - label: Live Demo
        url: http://134.122.26.41:3000
        style: primary
    has_background: true
    background_color: gray
template: post
---
## How to run the demo

- Go to the demo link
- You will see the following page

![Demo](/images/drug-d-1.png)

- A default query will be presented
- Fill one the drug names examples on the keyword option
- Press the play button
- You will get the results rendered on the right side


## Tecnical Information

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ9EpgmRY1ctPLiEGllsoUs1eS0Qew5PTpZPz0en1734uRWLNplF9jC-EuGfmkovySFTL_EEFKC5M0h/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>