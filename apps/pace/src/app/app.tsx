import AddButton from './components/addButton';
import TaskList from './components/buttons/taskList';

export const App = () => {
  return (
    <>
      <TaskList
        tasks={[
          {
            name: 'Hello',
            deadline: new Date('12/12/2021'),
            minutesEstimation: 60,
            priority: 'urgent',
          },
        ]}
      />
      <AddButton />
    </>
  );
};

export default App;
