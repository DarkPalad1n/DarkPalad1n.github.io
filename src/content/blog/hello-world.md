---
title: 'Hello, world — and why anomalies are interesting'
description: 'A first post: who I am, what I work on, and what this blog will be about.'
pubDate: 2026-10-21
tags: ['meta', 'anomaly detection']
---

<!-- TODO: Rewrite this post in your own words, or delete it and write your first real one. -->

Welcome to my corner of the internet. I'm a Computer Science M.Sc. candidate at Brown University,
and this blog is where I'll write about the things I'm learning along the way.

## What I work on

Most of my time currently goes into **time-series anomaly detection**: given a stream of
measurements — sensor readings, server metrics, physiological signals — find the moments
that don't fit.

The hard part is rarely spotting a giant spike. It's the subtle stuff:

- a pattern that is normal on Mondays but suspicious on Sundays,
- a slow drift that never crosses any single threshold,
- two signals that are each fine on their own, but not together.

```python
# The simplest possible baseline: a rolling z-score
import numpy as np

def zscore_anomalies(x: np.ndarray, window: int = 50, k: float = 3.0) -> np.ndarray:
    mu = np.convolve(x, np.ones(window) / window, mode="same")
    sd = np.sqrt(np.convolve((x - mu) ** 2, np.ones(window) / window, mode="same"))
    return np.abs(x - mu) > k * (sd + 1e-8)
```

Baselines like this are surprisingly hard to beat — which is exactly what makes the field fun.

## What to expect here

Paper notes, small experiments, and the occasional post about something unrelated.
