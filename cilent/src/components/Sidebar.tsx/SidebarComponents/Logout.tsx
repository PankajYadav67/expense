import { useDisclosure, Button, Modal, ModalHeader, ModalOverlay, ModalContent, ModalCloseButton, ModalFooter, ModalBody } from '@chakra-ui/react';
import { useAuth } from '../../../context/Auth.Context';

const Logout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { logout } = useAuth();
    return (
        <>
            <Button colorScheme='blue' variant="ghost" onClick={onOpen}>Logout</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Are you sure you want to logout ?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* <Lorem count={2} /> */}
                        <div className='h-[420] w-[420px] flex justify-center text-center '>

                            <img src="/img/logout.svg" alt="logoutImage" />
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='red' variant="ghost" mr={3} onClick={() => logout()}>
                            Log-Out
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default Logout;