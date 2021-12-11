import { Priority } from '@hackyeah/types';
import { Schedule } from '@mui/icons-material';
import { format, differenceInCalendarDays } from 'date-fns';
import styled from 'styled-components';
import { getRelativeDayNote } from '../utils/date.util';

const Task = styled.li`
  width: 100%;
  padding: 1em;
  border-bottom: 1px;
  box-sizing: border-box;
  background-color: #dcdcdc;
  border-bottom: 1px solid #bababa;
`;

const Deadline = styled.div`
  display: flex;
  align-items: center;
`;

const ScheduleIcon = styled(Schedule)`
  && {
    margin-right: 8px;
  }
`;

type Props = {
  name: string;
  deadline: Date;
  minutesEstimation: number;
  priority: Priority;
};

const TaskPane = ({ name, deadline }: Props) => {
  const days = differenceInCalendarDays(deadline, new Date());

  return (
    <Task>
      <h2>{name}</h2>
      <Deadline>
        <ScheduleIcon />
        {format(deadline, 'dd-MM-yyyy')} ({getRelativeDayNote(days)})
      </Deadline>
    </Task>
  );
};

export default TaskPane;
