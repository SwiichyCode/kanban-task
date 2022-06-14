import React from "react";
import EmptyTask from "./EmptyTask";
import TaskRender from "./RenderTask";
import { TaskWrapper } from "./style";

export default function Task({ boards }) {
  return (
    <TaskWrapper>
      {boards && boards.length >= 1 ? <TaskRender /> : <EmptyTask />}
    </TaskWrapper>
  );
}
