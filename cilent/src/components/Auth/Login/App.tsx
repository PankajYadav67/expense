import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text,
    useToast
} from '@chakra-ui/react'
import { OAuthButtonGroup } from './OAuthButtonGroup'
import { PasswordField } from './PasswordField'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../../../context/Auth.Context";



export const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const url = URL;
    const toast = useToast();
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    const handleLogIn = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/auth/login`, {
                email,
                password,
            });
            // Successful login
            toast({
                title: `Successfully Logged In`,
                description: `Welcome back! You have successfully logged in.`,
                status: 'success',
                duration: 3000,
                position: "top",
                isClosable: true,
            });
            // Update AuthContext with login data

            if (response) {
                const { _id, email, token } = response.data.payload;
                login({
                    _id,
                    email,
                    token
                });
                // Navigate to the home page
                navigate('/');
            }
            // Handle the response, e.g., show a success message or redirect the user
            console.log(response.data);
        } catch (error) {
            toast({
                title: `Login Failed`,
                description: `Oops! There was an error during login. Please check your credentials and try again.`,
                status: 'error',
                duration: 3000,
                position: "top",
                isClosable: true,
            });
            console.error('Error during signup:', error);
        }
    };

    return (
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Stack spacing="8">
                <Stack spacing="6">
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                        <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                        <Text color="fg.muted">
                            Don't have an account? <Link href="#">Sign up</Link>
                        </Text>
                    </Stack>
                </Stack>
                <Box
                    py={{ base: '0', sm: '8' }}
                    px={{ base: '4', sm: '10' }}
                    bg={{ base: 'transparent', sm: 'bg.surface' }}
                    boxShadow={{ base: 'none', sm: 'md' }}
                    borderRadius={{ base: 'none', sm: 'xl' }}
                >
                    <Stack spacing="6">
                        <Stack spacing="5">
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input id="email" type="email" value={email} onChange={handleEmailChange} />
                            </FormControl>
                            <PasswordField value={password} onChange={handlePasswordChange} />
                        </Stack>
                        <HStack justify="space-between">
                            <Checkbox defaultChecked>Remember me</Checkbox>
                            <Button variant="text" size="sm">
                                Forgot password?
                            </Button>
                        </HStack>
                        <Stack spacing="6">
                            <Button onClick={handleLogIn}>Sign in</Button>
                            <HStack>
                                <Divider />
                                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                                    or continue with
                                </Text>
                                <Divider />
                            </HStack>
                            <OAuthButtonGroup />
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    )
}