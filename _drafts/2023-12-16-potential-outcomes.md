---
title: "Fundamentals of Causal Inference : The Potential Outcomes" 
date: 2023-12-16 19:00:00 +/-0800
categories: [Causal Inference]
tags: [causal_inference, notes]     # TAG names should always be lowercase
img_path: /assets/img/posts/2023-12-16/
# image: peanut_img.png
comments: true
math: true
---

# Introduction 

I decided to re-write a few notes that I have handwritten of the fundamentals of causal inference while we teach a crash course of new DS interns at uber, while I haven't study this topic in a while I wanted to revisit this fundamentals now that I have a few more practical experience in the field. 

While the idea of these notes are to provide the (theorical) fundamentals, I will also want to make them lightweight so are also enjoyable for a student that it's just arriving to this topic. To read this topic in a more structured way I suggest you (dear reader) to take a look into the chapters [`1`][1] and [`4`][2] of the ["Causal Inference The Mixtape"][3], and also to complement the study reading ["The Effect"][4], particularly the chapter [10][5]

# Fundamentals of Causal Inference

So what is causal inference? Have you ever heard the infamous phrase "correlation doesn't mean causality"?, as me, probably you wonder: "Is it even possible to estimate causality?". That's exactly what causal inference is, a way to estimate causality. 

More formally, Causal inference is the field that studies "causality", in the most general sense, when we can **"infer"** that two variables are not only correlated, but also they have a "causal" effect one on the other. 

One way to understand causality is to frame it as a question of what would have happened if X occurred instead of Y. For instance, what would have happened if I had bought Bitcoin in 2010 when my friend Mauri suggested it? Or what would have happened if the oil price was $100 instead of $120?. how do we link this with causality ?, if we, somehow, can answer this alternative "state of the universe" ( $X$ ) we could understand what its the effect of the variable $X \to Z$. 

This paradigm that encloses causality on a frame of two "potential states" or "alternative universes" its called "Potential Outcomes". 

## Potential Outcomes 

On the potential outcomes literature ([Rubin (1974)][6], [Splawa-Neyman (1923)][7]) they frame this theorical problem in a counterposition of two states "the actual state" and the "counterfactual state", the first being, what actually happened and the second one what would have happened. 




$$T(D,Y) =  \widehat{ATE}(D, Y) = E\big[Y^1\mid D=1\big] - E\big[Y^1\mid D=0\big]$$


confidence interval 

$$\delta_i = [...-0.2,-0.1, 0, 0.1 , 0.2, ...]$$

$$H_0: \delta = \delta_i $$



[1]:<https://mixtape.scunning.com/01-introduction>
[2]:<https://mixtape.scunning.com/04-potential_outcomes>
[3]:<https://mixtape.scunning.com>
[4]:<https://theeffectbook.net/>
[5]:<https://theeffectbook.net/ch-TreatmentEffects.html>
[6]:<https://mixtape.scunning.com/references#ref-Rubin1974>
[7]:<https://mixtape.scunning.com/references#ref-Neyman1923>