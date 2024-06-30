'use client';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SignUpAPI } from '@/utils/api/auth/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Router } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
    username: z.string().nonempty({ message: 'Enter a valid username' }),
    name: z.string().nonempty({ message: 'Enter a valid name' }),
    email: z.string().email({ message: 'Enter a valid email address' }),
    password: z.string().nonempty({ message: 'Enter a valid password' })
});

type UserFormValue = z.infer<typeof formSchema>;

export default function SignupUserAuthForm() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');
    const [loading, setLoading] = useState(false);
    const defaultValues = {
        // username: 'demo1',
        // name: 'pankaj yadav',
        // email: 'demo@gmail.com',
        // password: "demo@123"
    };
    const form = useForm<UserFormValue>({
        resolver: zodResolver(formSchema),
        defaultValues
    });
    const router = useRouter()

    const onSubmit = async (data: UserFormValue) => {
        signIn('credentials', {
            email: data.email,
            password: data.password,
            callbackUrl: callbackUrl ?? '/login'
        });
    };
    const handleSignup = async (data: UserFormValue) => {
        setLoading(true);
        try {
            const requestBody = {
                username: data.username,
                name: data.name,
                email: data.email,
                password: data.password,
            }
            const res = await SignUpAPI(requestBody);
            console.log(res, "Signup API response");
            // if (res?.res?.responseCode !== "-1") {
            router.push("/login")
            // }
        } catch (error) {
            console.error("Error in handleSignUP:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSignup)}
                    className="w-full space-y-2"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Enter your username..."
                                        disabled={loading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Enter your name..."
                                        disabled={loading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email..."
                                        disabled={loading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Enter your password..."
                                        disabled={loading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='flex justify-center text-center'>

                        <Button type="submit" disabled={loading} className='mt-5'>
                            {loading ? 'Signing in...' : 'Sign in'}
                        </Button>
                    </div>

                </form>
            </Form>

        </>
    );
}
