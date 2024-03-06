import { Box, Flex, Text, Button, Stack, Input, InputGroup, Icon, InputLeftElement, Divider } from '@chakra-ui/react';
import { theme } from "../../main";
import { Search2Icon } from '@chakra-ui/icons';

const Navbar: React.FC = () => {
    const isLoggedIn = false; // Replace with your actual authentication status

    return (
        <Box w={1366} bg={theme.colors.brand.lightestGray}>
            <div className="sm:mx-40 sm:px-10 sm:py-5 font-[SF-Pro] p">
                <Flex justify="space-between" m={0} px={3} align="center">
                    <Text fontSize="2xl" fontWeight="bold">
                        EXPENSE
                    </Text>

                    <Flex>
                        {isLoggedIn ? (
                            // User is logged in, show logout button
                            <Button colorScheme='blue' >
                                Logout
                            </Button>
                        ) : (
                            // User is not logged in, show search input and button
                            <Stack direction='row' align='center'>
                                <InputGroup className='sm:w-[800px] w-24'>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        alignItems="center"
                                        children={<Icon as={Search2Icon} color="gray.300" />}
                                    />
                                    <Input placeholder='Search' bg="white" size="lg" />


                                </InputGroup>

                                <a href='/auth/login'>
                                <Button colorScheme='blue' >
                                    Login
                                </Button>
                                </a>
                            </Stack>
                        )}
                    </Flex>
                </Flex >
            </div>
            <Divider />
        </Box >
    );
};

export default Navbar;
