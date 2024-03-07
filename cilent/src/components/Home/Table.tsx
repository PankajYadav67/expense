import { TableContainer, Table, Thead, TableCaption, Th, Td, Tr, Tfoot, Tbody } from '@chakra-ui/react'
import React from 'react'

const Table1: React.FC = () => {
    return (
        <div className='sm:px-10'>

            <TableContainer>

                <Table variant='striped' colorScheme="#f5f5f5">
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Date</Th>
                            <Th>Category</Th>
                            <Th isNumeric>Mode</Th>
                            <Th isNumeric>Comment</Th>
                            <Th isNumeric>Anount</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                            <Td>yards</Td>
                            <Td>metres (m)</Td>
                            <Td isNumeric>0.91444</Td>
                        </Tr>
                    </Tbody>
                   
                </Table>
            </TableContainer>

        </div>
    )
}

export default Table1;