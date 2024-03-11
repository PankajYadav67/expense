import { Box, Flex, Text, Button, Stack, Input, InputGroup, Icon, InputLeftElement, Divider } from '@chakra-ui/react';

import { useAuth } from '../../context/Auth.Context';
import { theme } from '../../main';
// import { Search2Icon } from '@chakra-ui/icons';

const Navbar: React.FC = () => {


    return (
        <Box w="100%" position="fixed" bg={theme.colors.brand.lightestGray} zIndex="1000">
            <div className=" sm:mx-10 sm:py-2 font-[SF-Pro] ">

                <Flex justify="space-between" m={0} px={3} align="center">
                    <a href="/">

                        <Text fontSize="2xl" fontWeight="bold">
                            Expense Tracker
                        </Text>
                    </a>

                    <Flex>
                        {
                            // User is not logged in, show search input and button
                            // <Stack direction='row' align='center'>
                            //     <InputGroup className='sm:w-[800px] w-24'>
                            //         <InputLeftElement
                            //             pointerEvents="none"
                            //             alignItems="center"
                            //             children={<Icon as={Search2Icon} color="gray.300" />}
                            //         />
                            //         <Input placeholder='Search' bg="white" size="lg" />
                            //     </InputGroup>
                            // </Stack>
                        }

                    </Flex>
                </Flex >
            </div>
            <Divider sx={{ height: "1px", bg: "gray.500" }} />
        </Box >
    );
};

export default Navbar;
