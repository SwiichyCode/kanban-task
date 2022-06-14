import React from "react";
import EmptyTask from "./EmptyTask";
import { TaskWrapper } from "./style";

export default function Task({ task }) {
  return (
    <TaskWrapper>
      {task.length >= 1 ? <span>notEmpty</span> : <EmptyTask />}
    </TaskWrapper>
  );
}
