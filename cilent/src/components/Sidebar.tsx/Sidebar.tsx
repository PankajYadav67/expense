// Sidebar.tsx
import React from 'react';
import { Box, Flex, Image, Text, Button, } from '@chakra-ui/react';
import { theme } from '../../main';
import { useAuth } from '../../context/Auth.Context';

const Sidebar: React.FC = () => {
    const { isLoggedIn, logout } = useAuth()
    const { email, _id } = useAuth().userData;

    return (

        <Box bg={theme.colors.brand.lightestGray} position="fixed" >
            <Box
                color="black"
                w="64"
                p="8"
                h="560"
                display="flex"
                flexDir="column"
                borderRight="2px solid var(--chakra-colors-blue-500)"
            >
                {/* User Info */}
                {
                    isLoggedIn ? (<div>

                        <Flex align="center" mb="8">
                            <Image src="path/to/profile-image.jpg" borderRadius="full" boxSize="10" mr="2" />
                            <Box>
                                <Text fontWeight="bold">{_id}</Text>
                                <Text >{email}</Text>
                            </Box>

                        </Flex>
                        <Flex>
                            <Box>
                                <Text fontSize="sm">Available Balance: 1000</Text>
                            </Box>
                        </Flex>
                    </div>) : (<div></div>)
                }

                {/* Tabs */}
                <Flex flexDir="column">
                    <Box mb="4">

                        <Flex flexDir="column">
                            {/* Tab 1: Overview */}
                            <Box mb="2">Overview</Box>
                            {/* Tab 2: Transaction */}
                            <Box mb="2">Transaction</Box>
                            {/* Tab 3: About */}
                            <Box>About</Box>
                        </Flex>
                    </Box>

                    {/* Last Login */}
                    <Box mt="auto">
                        <Text fontSize="sm" opacity="0.7">
                            Last Login: 2024-03-07 12:30 PM
                        </Text>
                    </Box>

                    {isLoggedIn ? (
                        <Button colorScheme='blue' >
                            Log-Out
                        </Button>
                    ) : (
                        <a href='/auth/login'>

                            <Button colorScheme='blue' onClick={logout} >
                                Log-In
                            </Button>
                        </a>
                    )}
                </Flex>

            </Box>



        </Box>

    );
};

export default Sidebar;
