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
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import axios from 'axios';
import { LoginAPI } from "@/utils/api/auth/auth"

const formSchema = z.object({
    email: z.string().email({ message: 'Enter a valid email address' }),
    password: z.string().nonempty({ message: 'Enter a valid password' })
});

type UserFormValue = z.infer<typeof formSchema>;
// Type guard to check if response has the 'res' property
function isResponseWithRes(obj: any): obj is { response: any } {
    return obj && obj.response !== undefined;
}
export default function LoginUserAuthForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');
    const defaultValues = {
        email: 'example1@gmail.com',
        password: "Example@123"
    };
    const form = useForm<UserFormValue>({
        resolver: zodResolver(formSchema),
        defaultValues
    });

    const onSubmit = async (data: UserFormValue) => {
        signIn('credentials', {
            email: data.email,
            password: data.password,
            callbackUrl: callbackUrl ?? '/dashboard'
        });
    };
    const handleLogin = async (data: UserFormValue) => {
        setLoading(true);
        try {
            const requestBody = {
                email: data.email,
                password: data.password,
            }
            const res = await LoginAPI(requestBody);
            console.log(res, "Login API response");
            if (isResponseWithRes(res) && res.response.responseCode !== "-1") {
                router.push("/dashboard");
            } else {
                console.error("Signup failed:");
            }
        } catch (error) {
            console.error("Error in handleLogin:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleLogin)}
                    className="w-full space-y-2"
                >
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
                            {loading ? 'Login ...' : 'Login'}
                        </Button>
                    </div>

                </form>
            </Form>

        </>
    );
}
