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
    $addFields: {
      joinedData: { $ifNull: [ "$joinedData", [] ] }
    }
  },
  {
    $unwind: "$joinedData"
  }
];

const result = await collectionA.aggregate(pipeline).toArray();
```