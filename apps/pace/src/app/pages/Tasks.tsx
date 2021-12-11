import AddButton from '../components/addButton';
import TaskList from '../components/taskList';

const Tasks = () => {
  return (
    <>
      <TaskList
        tasks={[
          {
            id: '1',
            name: 'Teoria obliczeń i złożoności obliczeniowej',
            deadline: new Date('12/12/2021'),
            minutesEstimation: 60,
            priority: 'urgent',
          },
          {
            id: '2',
            name: 'Hello',
            deadline: new Date('12/11/2021'),
            minutesEstimation: 60,
            priority: 'urgent',
          },
          {
            id: '3',
            name: 'Hello',
            deadline: new Date('12/10/2021'),
            minutesEstimation: 60,
            priority: 'urgent',
          },
          {
            id: '4',
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
