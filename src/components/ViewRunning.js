import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Button } from "@chakra-ui/react";

export default function ViewRunning({ todos, completeTodo }) {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Currently Active Todo</TableCaption>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Date Time</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {todos.map((item, index) =>
            item.status === "active" ? (
              <Tr key={index}>
                <Td>{item.title}</Td>
                <Td>{item.desc}</Td>
                <Td>{item.dateTime.replace("T", " at ")}</Td>
                <Td>
                  <Button colorScheme="green" onClick={() => completeTodo(index)}>
                    Completed?
                  </Button>
                </Td>
              </Tr>
            ) : null
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
