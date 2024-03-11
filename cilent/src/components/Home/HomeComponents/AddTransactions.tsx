import React, { useRef, useState } from 'react';
import {
    Button,
    Modal,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Tabs,
    ModalBody,
    Tab,
    ModalFooter,
    ModalOverlay,
    useDisclosure,
    TabList,
    ModalHeader,
    FormControl,
    Select,
    Input,
    ModalCloseButton,
    ModalContent,
    FormLabel,
} from '@chakra-ui/react';

const AddTransactions: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = useRef(null);
    const finalRef = useRef(null);

    const [typeOfTransaction, setTypeOfTransaction] = useState<string>('Expense');
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('Entertainment');
    const [mode, setMode] = useState<string>('Cash');
    const [amount, setAmount] = useState<number>(100);
    const [date, setDate] = useState<string>('');

    const formatAmount = (val: number) => `₹` + val.toFixed(2);

    const handleSave = () => {
        // Perform your API request here
        console.log('API request will be made with the following data:', {
            typeOfTransaction,
            title,
            category,
            mode,
            amount,
            date,
        });

        // Close the modal after the API request is complete
        onClose();
    };

    return (
        <div className='flex justify-center text-center'>
            <Button onClick={onOpen}>Add transaction</Button>
            <Button ml={4} ref={finalRef}>
                I'll receive focus on close
            </Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Transaction</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                           
                            <Tabs variant='soft-rounded' colorScheme='green' ref={initialRef}>
                                <TabList>
                                    <Tab
                                        onClick={() => setTypeOfTransaction('Expense')}
                                        _selected={{ color: 'red.500', bg: 'red.200' }}
                                    >
                                        Expense
                                    </Tab>
                                    <Tab onClick={() => setTypeOfTransaction('Income')}>Income</Tab>
                                </TabList>
                            </Tabs>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Title</FormLabel>
                            <Input
                                placeholder='Add information about transaction.'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Category</FormLabel>
                            <Select
                                size='md'
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value='Entertainment'>Entertainment</option>
                                <option value='Food'>Food</option>
                                <option value='Travel Expense'>Travel Expense</option>
                                <option value='Other'>Other</option>
                            </Select>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Mode</FormLabel>
                            <Select
                                size='md'
                                value={mode}
                                onChange={(e) => setMode(e.target.value)}
                            >
                                <option value='Cash'>Cash</option>
                                <option value='Card'>Card</option>
                                <option value='UPI'>UPI ( Gpay/ PhonePe/ Paytm )</option>
                            </Select>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Amount</FormLabel>
                            <NumberInput
                                onChange={(valueString) => setAmount(parseFloat(valueString))}
                                value={formatAmount(amount)}
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Date</FormLabel>
                            <input
                                type='datetime-local'
                                className='p-4 h-[50px] rounded-md outline-gray-200 ring-1 ring-gray-200'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleSave}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default AddTransactions;
