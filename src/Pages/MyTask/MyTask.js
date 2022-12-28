import { Button, Table } from "flowbite-react";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyTask = () => {
  const tasks = useLoaderData();
  const [displayTasks, setDisplayTasks] = useState(tasks);

  const handleDelete = task => {
    const agree = window.confirm(`Are you sure to delete: ${task.taskName}`);
    // console.log(agree);
    if(agree){
      // console.log('deleting task with id', task._id);
      fetch(`http://localhost:5000/myTasks/${task._id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
          alert('Task Deleted Successfully');
          const remainingTasks = displayTasks.filter(tsk => tsk._id !== task._id);
          setDisplayTasks(remainingTasks);
        }
      })
    };

  }

  const handleComplete = task => {
    // console.log('clicked', task._id);
    const complete = window.confirm(`Are you sure you completed this task ${task.taskName}`);
    if(complete){
      fetch('http://localhost:5000/completedTasks', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert('Task Completed Successfully');
      })
    }
  }

  return (
    <div>
      <h3 className="text-3xl font-semibold my-4 text-center">My Task {displayTasks.length}</h3>
      <Table>
        <Table.Head>
          <Table.HeadCell>All Task List</Table.HeadCell>
          <Table.HeadCell>Update</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
          <Table.HeadCell>Completed</Table.HeadCell>
        </Table.Head>
        {
          displayTasks.map((task, i) => <Table.Body key={task._id} className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {i+1}. {task.taskName}
            </Table.Cell>
            <Table.Cell>
              <Button size="xs" outline={true} gradientDuoTone="purpleToBlue">
                Update
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button onClick={() => handleDelete(task)} size="xs" outline={true} gradientDuoTone="redToYellow">
                Delete
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button onClick={() => handleComplete(task)} size="xs" outline={true} gradientDuoTone="greenToBlue">
                Completed
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>)
        }
        {/* <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>
              <Button size="xs" outline={true} gradientDuoTone="purpleToBlue">
                Update
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button size="xs" outline={true} gradientDuoTone="redToYellow">
                Delete
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button size="xs" outline={true} gradientDuoTone="greenToBlue">
                Completed
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
          </Table.Row>
        </Table.Body> */}
      </Table>
    </div>
  );
};

export default MyTask;
