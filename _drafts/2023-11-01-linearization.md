---
title: Linearization    
date: 2023-04-21 17:38:26 +/-0800
categories: [Causal Inference, Synthetic Control]
tags: [causal_inference, notes]     # TAG names should always be lowercase
img_path: /assets/img/posts/2023-04-21/
image: peanut_img.png
comments: true
math: true
---

# Linearization 

# Solving a Quadratic Problem (QP) in an open source linear solver
How to linearize a quadratic function to use it in a linear solver, (a.k.a. I don’t have money to pay for Gurobi) using a retail example

So, I ended up college using a lot of fancy optimization software (with student license) such as AMPL, CPLEX and Gurobi, and I was super hyped because bring-me-the-model and I-will-solve-it. The only problem was that these super awesome solvers are f̶*̶ ̶e̶x̶p̶e̶n̶s̶i̶v̶e̶ not cheap and many small companies don’t have the money to buy a license, or maybe they are not willing to pay unless they see the value on that.

So, as me, you find out that there are many open source linear solvers available out there, but they are not as fast and advanced as your student-licensed-wonderful-solver, and of course, they have limitations. The one feature that I missed the most was the ability to solve QP models.

Therefore, if you are looking for a way to solve a QP model in an open source linear solver (such as COIN-CBC) this article might be for you.

If you are familiar with what a QP model is you can skip the next section. If you are wondering why should I care about quadratic functions? keep reading.

## Why should I care about quadratic functions?

(a.k.a. should’t be solving a linear model ?). I think the easiest way to introduce the importance of QP models is through an example.

Let’s assume that you have to plan the t-shirt shipments from warehouse to retail stores for an entire season (let’s call $i \in I$ a store and $e{i,t}$ the shipment to the store $i$ in the day $t$). Let’s imagine that with some super-cool-machine-learning algorithm you made a forecast for each store and period of time (lets call $d{i,t}$ the demand forecast $i \in I$, $t \in T$).

Let’s say, for the purpose of this example that we have a bump in demand of t-shirts (because, summer) and probably we are not being able to fulfill all the demand. If we plot this forecast for three stores (1,2,4) we have:

