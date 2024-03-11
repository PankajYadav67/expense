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
import { ChangeEvent, FormEvent, useState } from 'react';
import axios from "axios";
import URL from '../../../utils/Constant';


interface SignupProps { }

export const Signup: React.FC<SignupProps> = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const toast = useToast();

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSignUp = async (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            // Send a POST request to the server with user-provided email and password
            const response = await axios.post(`${URL}/auth/signup`, {
                email,
                password,
            });

            // Display a success message to the user upon successful signup
            toast({
                title: `Account created.`,
                description: "Your account has been successfully created.",
                status: 'success',
                duration: 5000,
                position: "top",
                isClosable: true,
            });

            // Handle the response, e.g., show a success message or redirect the user
            console.log(response.data);
        } catch (error) {
            // Display an error message to the user if signup fails
            toast({
                title: `Error during signup.`,
                description: "Unable to create your account. Please try again.",
                status: 'error',
                duration: 3000,
                position: "top",
                isClosable: true,
            });

            // Log the detailed error information for debugging purposes
            console.error('Error during signup:', error);
        }
    };

    return (

        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Stack spacing="8">
                <Stack spacing="6">
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                        <Heading size={{ base: 'xs', md: 'sm' }}>Let's Create An Account</Heading>
                        <Text color="gray.500">
                            Already have an account? <Link href="/auth/login">Log up</Link>
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
                        </HStack>
                        <Stack spacing="6">
                            <Button onClick={handleSignUp}>Sign Up</Button>
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
}
