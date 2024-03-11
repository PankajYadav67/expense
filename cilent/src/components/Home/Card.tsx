// Sidebar.tsx
import React from 'react';
import { SimpleGrid, Card, Heading, Text } from '@chakra-ui/react';
import { CardBody, CardHeader, } from "@chakra-ui/react";

const Card1: React.FC = () => {
    return (
        <div className='sm:m-8'>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
              
                <Card>
                    <CardHeader>
                        <Heading size='md'>Account Balance</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>₹ 1000</Text>
                    </CardBody>

                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='md'>Total Expense</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>₹ 1000</Text>
                    </CardBody>

                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='md'>Total Income</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>₹ 2000</Text>
                    </CardBody>

                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='md'>Total Cash Payment</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>₹ 200</Text>
                    </CardBody>

                </Card>
            </SimpleGrid>
        </div>

    );
};

export default Card1;
