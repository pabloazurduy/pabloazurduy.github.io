---
title: Building a Relaxation Algorithm for Linear Optimization Problems    
date: 2023-11-05 10:00:00 +/-0800
categories: [Optimization, Linear Optimization, Relaxation]
tags: [LP, linear_optimization, notes, documentation]     # TAG names should always be lowercase
img_path: /assets/img/posts/2023-11-05/
# image: peanut_img.png
comments: true
math: true
---


## An introduction of the infeasibility problem 

Optimization problems are often studied in a simplified way, without considering the real-world complexities that businesses and industries face. I recall the first time I learned about this was in a class, when a master’s student presented his thesis on a [rostering problem (NSP)][1] for a transportation firm. He revealed that his optimized solution for the rostering cost (the objective value) was actually worse than the current one. The firm wanted to reduce the number of staff for the shifts, but the model suggested that they needed to hire two more people.

He explained that the reason for this outcome was that the current schedule "relaxed" ~~ignored~~ many constraints (imposed by work regulation laws, union agreements, company policies and staff preferences). By the way, yes, they "discovered" that they were "not complying" when they built the optimization model for rostering (no comments). 

After finishing my degree, I started working on various optimization models in different industries. I soon realized that many optimization problems had constraints that were very “optimistic”. ~~Luckily, none of them were as non-compliant as the rostering problem~~ 😂, but it was still quite common (in my experience) to encounter business problems that were framed in very unrealistic ways. 

1. I want to build a rocket that can reach Mars.
1. It should cost less than $100.
1. It has to be built in 5 months.
1. It has to be made of paper and tape.
 
Yes, that kind of problems. So you quickly learn, after a few "negotiations" with the client that  __not all the constraints have the same "importance"__, some of them can be relaxed some others not, and you have to "tweak" your model to do so. 

## Some alternatives

On the open source world, you usually have a very limited amount of solvers and among those the most frequent alternative its to use [elastic constraints][2] ([great tutorial on how to use them][3]). 

This solution, similar to directly penalize the objective function, its 



[1]:<https://en.wikipedia.org/wiki/Nurse_scheduling_problem>
[2]:<https://coin-or.github.io/pulp/guides/how_to_elastic_constraints.html>
[3]: <https://medium.com/walmartglobaltech/fine-tuning-optimization-results-with-scenario-planning-using-elastic-constraints-1c3129272349>