```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "joinedData"
    }
  },
  {
    $unwind: "$joinedData" //Error prone if collectionB is empty for some _id
  }
];

const result = await collectionA.aggregate(pipeline).toArray();
```