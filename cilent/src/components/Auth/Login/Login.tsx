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
    useToast,
} from '@chakra-ui/react';
import { OAuthButtonGroup } from './OAuthButtonGroup';
import { PasswordField } from './PasswordField';
import axios from 'axios';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../../context/Auth.Context";
import URL from '../../../utils/Constant';

interface LoginProps { }

export const Login: React.FC<LoginProps> = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const toast = useToast();
    const { login } = useAuth();
    const navigate = useNavigate();


    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogIn = async (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${URL}/auth/login`, {
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

            if (response) {
                const { payload } = response.data;
                const { token } = response.data;
                fetchData(token);
                login(payload);
                navigate('/');
            }
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
            console.error('Error during login:', error);
        }
    };


    const fetchData = async (token: string) => {
        try {
            // Axios will automatically include the token in the headers due to the interceptor
            const response = await axios.get(`${URL}/protected`, {
                headers: {
                    'x-auth-token': token,
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching protected data:', error);
        }
    };



    return (
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Stack spacing="8">
                <Stack spacing="6">
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                        <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                        <Text color="fg.muted">
                            Don't have an account? <Link href="/auth/signup">Sign up</Link>
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
                            <Button onClick={handleLogIn}>Log in</Button>
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
    );
};
