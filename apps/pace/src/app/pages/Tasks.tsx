import AddButton from '../components/addButton';
import TaskList from '../components/taskList';

const Tasks = () => {
  return (
    <>
      <TaskList
        tasks={[
          {
            name: 'Teoria obliczeń i złożoności obliczeniowej',
            deadline: new Date('12/12/2021'),
            minutesEstimation: 60,
            priority: 'urgent',
          },
          {
            name: 'Hello',
            deadline: new Date('12/11/2021'),
            minutesEstimation: 60,
            priority: 'urgent',
          },
          {
            name: 'Hello',
            deadline: new Date('12/10/2021'),
            minutesEstimation: 60,
            priority: 'urgent',
          },
          {
            name: 'Hello',
            deadline: new Date('12/12/2022'),
            minutesEstimation: 60,
            priority: 'urgent',
          },
        ]}
      />
      <AddButton />
    </>
  );
};

export default Tasks;
