import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";

export default function ViewCompleted({ todos }) {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Completed Todos</TableCaption>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Date Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {todos.map((item, index) =>
            item.status === "completed" ? (
              <Tr key={index}>
                <Td>{item.title}</Td>
                <Td>{item.desc}</Td>
                <Td>{item.dateTime.replace("T", " ")}</Td>
              </Tr>
            ) : null
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
