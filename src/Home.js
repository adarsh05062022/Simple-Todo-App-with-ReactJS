import React,{useState} from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import ViewRunning from "./components/ViewRunning";
import ViewCompleted from "./components/ViewCompleted";
import CreateTodo from "./components/CreateTodo";

export default function Home() {

    const [todos, setTodos] = useState([
        {
          dateTime: "2024-06-21T03:13",
          desc: "Add Your Description",
          status: "active",
          title: "Add Your Title",
        },
      ]);

      const addTodo = (newTodo) => {
        setTodos([ newTodo,...todos]);
      };
    
      const completeTodo = (index) => {
        const updatedTodos = todos.map((todo, i) =>
          i === index ? { ...todo, status: "completed" } : todo
        );
        setTodos(updatedTodos);
      };

  return (
    <>
      <div>
        <Text fontSize="50px" color="tomato" style={{ textAlign: "center" }}>
          Todo List
        </Text>
      </div>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Todos</Tab>
          <Tab>Create New</Tab>
          <Tab>Show Completed</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ViewRunning todos={todos} completeTodo={completeTodo}/>
          </TabPanel>
          <TabPanel>
            <CreateTodo addTodo={addTodo}/>
          </TabPanel>
          <TabPanel>
            <ViewCompleted todos={todos} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
