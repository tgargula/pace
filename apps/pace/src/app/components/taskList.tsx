import { Task } from '@hackyeah/types';
import styled from 'styled-components';
import TaskPane from './taskPane';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

type Props = {
  tasks: Task[];
};

const TaskList = ({ tasks }: Props) => (
  <List>
    {tasks.map(({ id, name, deadline, minutesEstimation, priority }) => (
      <TaskPane
        key={id}
        name={name}
        deadline={deadline}
        minutesEstimation={minutesEstimation}
        priority={priority}
      />
    ))}
  </List>
);

export default TaskList;
