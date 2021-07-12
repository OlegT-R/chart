const getTime = (t) => new Date(t).getTime()

export function largestTriangleThreeBuckets(data, threshold) {
  let dataLength = data.length;

  let sampled = [];
  let sampledIndex = 0;

  // Bucket size. Leave room for start and end data points
  let every = (dataLength - 2) / (threshold - 2);

  let a,  // Initially a is the first point in the triangle
    maxAreaPoint,
    maxArea,
    area,
    nextA;

  a = 0;

  sampled[sampledIndex++] = data[a]; // Always add the first point
  let min = 0;
  let max = 0
  for (let i = 0; i < threshold - 2; i++) {

    // Calculate point average for next bucket (containing c)
    let avgX = 0,
      avgY = 0,
      avgRangeStart  = Math.floor((i + 1) * every) + 1,
      avgRangeEnd    = Math.floor((i + 2) * every) + 1;
    avgRangeEnd = avgRangeEnd < dataLength ? avgRangeEnd : dataLength;

    let avgRangeLength = avgRangeEnd - avgRangeStart;

    for (; avgRangeStart < avgRangeEnd; avgRangeStart++) {
      avgX += getTime(data[avgRangeStart]['t']) * 1; // * 1 enforces Number (value may be Date)
      avgY += data[avgRangeStart]['v'] * 1;
    }

    avgX /= avgRangeLength;
    avgY /= avgRangeLength;

    // Get the range for this bucket
    let rangeOffs = Math.floor((i + 0) * every) + 1,
      rangeTo   = Math.floor((i + 1) * every) + 1;

    // Point a
    let pointAX = getTime(data[a]['t']) * 1, // enforce Number (value may be Date)
      pointAY = data[a]['v'] * 1;

    maxArea = area = -1;

    for (; rangeOffs < rangeTo; rangeOffs++) {
      // Calculate triangle area over three buckets
      area = Math.abs((pointAX - avgX) * (data[rangeOffs]['v'] - pointAY) -
        (pointAX - getTime(data[rangeOffs]['t'])) * (avgY - pointAY)
      ) * 0.5;
      if (area > maxArea) {
        maxArea = area;
        maxAreaPoint = data[rangeOffs];
        nextA = rangeOffs; // Next a is this b
      }
    }

    sampled[sampledIndex++] = maxAreaPoint; // Pick this point from the bucket
    if(maxAreaPoint.v > max){
      max = maxAreaPoint.v
    }

    if(maxAreaPoint.v < min){
      min = maxAreaPoint.v
    }


    a = nextA; // This a is the next a (chosen b)
  }

  sampled[sampledIndex++] = data[dataLength - 1]; // Always add last

  return {min, max, data: sampled };
}
