import React, { useState } from "react";
import { Container, Input, Stack, Textarea, Button, ButtonGroup } from "@chakra-ui/react";

export default function CreateTodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");

  const isFormValid = title !== "" && description !== "" && dateTime !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      addTodo({
        title: title,
        desc: description,
        dateTime: dateTime,
        status: "active",
      });
      handleReset();
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  const handleReset = () => {
    setTitle("");
    setDescription("");
    setDateTime("");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Input
            focusBorderColor="lime"
            value={title}
            placeholder="Enter the Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            focusBorderColor="lime"
            placeholder="Enter the description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Textarea>
          <Input
            focusBorderColor="lime"
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
          <ButtonGroup variant="outline" spacing="5">
            <Button colorScheme="blue" type="submit" disabled={!isFormValid}>
              Add
            </Button>
            <Button colorScheme="red" onClick={handleReset} >
              Reset
            </Button>
          </ButtonGroup>
        </Stack>
      </form>
    </Container>
  );
}
