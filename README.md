# MongoDB Aggregation $unwind Error with Empty Join Result

This repository demonstrates a common error when using MongoDB's aggregation framework, specifically the combination of `$lookup` and `$unwind` operators. The issue arises when the `$lookup` stage returns an empty array for a given document, causing the `$unwind` stage to throw an error.

The `bug.js` file contains code that reproduces this error. The `bugSolution.js` file shows a corrected implementation that handles empty join results gracefully.

## Problem

The problem stems from the fact that the `$unwind` operator expects an array as input. If the `$lookup` stage does not find a match, the resulting array for the `joinedData` field will be empty. When `$unwind` attempts to process an empty array, it throws an error, halting the aggregation pipeline.

## Solution

The solution involves using the `$ifNull` operator to check if the `joinedData` array is empty. If it is, a default value is used, preventing the `$unwind` operator from encountering an empty array.

This approach ensures that the pipeline continues to execute even when no matching documents are found in the joined collection.