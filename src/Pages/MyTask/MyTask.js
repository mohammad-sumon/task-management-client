import { Button, Table } from "flowbite-react";
import React from "react";

const MyTask = () => {
  return (
    <div>
      <h3 className="text-3xl font-semibold mb-4 text-center">My Task</h3>
      <Table>
        <Table.Head>
          <Table.HeadCell>All Task List</Table.HeadCell>
          <Table.HeadCell>Update</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
          <Table.HeadCell>Completed</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
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
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyTask;
