import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={'150px'} w={'200px'} />
      <CardBody w={"100%"}>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
