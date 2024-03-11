// Sidebar.tsx
import React from 'react';
import { Box, Flex, Image, Text, Button, Divider, } from '@chakra-ui/react';
import { useAuth } from '../../context/Auth.Context';
import { theme } from '../../main';
import Logout from './SidebarComponents/Logout';

const Sidebar: React.FC = () => {
    const { isLoggedIn } = useAuth();
    const { email, _id } = useAuth().userData;

    return (

        <Box position="fixed" bg={theme.colors.brand.lightestGray} >
            <Box
                color="black"
                w="64"
                p="8"
                h="560"
                display="flex"
                flexDir="column"
                borderRight="1px soild gray"
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
                        <Logout />
                    ) : (
                        <a href='/auth/login'>

                            <Button colorScheme='blackAlpha'  >
                                Log-In
                            </Button>
                        </a>
                    )}
                </Flex>

            </Box>
            <Divider orientation='horizontal' sx={{ height: "1px", bg: "gray.500" }}></Divider>



        </Box>

    );
};


export default Sidebar;
