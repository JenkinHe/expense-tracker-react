import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup } from "@chakra-ui/react";



export default function TransactionForm({isOpen,onClose}){

    return <Modal isOpen={isOpen} onClose={onClose}>
        <form>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Add New Transaction</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <FormControl>
                        <FormLabel>Enter Description</FormLabel>
                        <Input
                        placeContent="Enter Transaction Description"
                        name="description"
                        type="text"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Enter Amount</FormLabel>
                        <Input
                        placeContent="Enter Transaction amount"
                        name="amount"
                        type="number"
                        />
                    </FormControl>
                    <RadioGroup mt="5">
                        <Radio value="income" colorScheme="blue" name="type">Income</Radio>
                        <Radio value="expense" colorScheme="red" name="type">Expense</Radio>

                    </RadioGroup>
                </ModalBody>
                <ModalFooter>
                    <Button m={'4'} onClick={onClose}>Cancel</Button>
                    <Button>Add</Button>
                </ModalFooter>
            </ModalContent>
        </form>
    </Modal>
}