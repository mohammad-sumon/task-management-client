import { Button, Table, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const CompletedTasks = () => {
  const completed = useLoaderData();
  const [displayCompleteTask, setDisplayCompleteTask] = useState(completed);

  const handleDelete = comptask => {
    const agree = window.confirm(`Are you sure to delete: ${comptask.taskName}`);
    if(agree){
      // console.log('deleting task with id', comptask._id);
      fetch(`https://task-management-server-omega.vercel.app/completedTasks/${comptask._id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
          alert('Task Deleted Successfully');
          const remainingTasks = displayCompleteTask.filter(tsk => tsk._id !== comptask._id);
          setDisplayCompleteTask(remainingTasks);
        }
      })
    }
  }


  return (
    <div>
      <h2 className="text-3xl font-semibold my-4 text-center">
        All Completed Tasks {displayCompleteTask.length}
      </h2>
      <Table>
        <Table.Head>
          <Table.HeadCell>All Completed Task Lists</Table.HeadCell>
          <Table.HeadCell>Comment</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Head>
        {
          displayCompleteTask.map((comptask, i) => <Table.Body key={comptask._id} className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {i+1}. {comptask.taskName}
            </Table.Cell>
            <Table.Cell>
              <TextInput></TextInput>
            </Table.Cell>
            <Table.Cell>
              <Button onClick={() => handleDelete(comptask)} size="xs" outline={true} gradientDuoTone="redToYellow">
                Delete
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button size="xs" outline={true} gradientDuoTone="greenToBlue">
                Not Completed
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
              <TextInput></TextInput>
            </Table.Cell>
            <Table.Cell>
              <Button size="xs" outline={true} gradientDuoTone="redToYellow">
                Delete
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button size="xs" outline={true} gradientDuoTone="greenToBlue">
                Not Completed
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

export default CompletedTasks;
