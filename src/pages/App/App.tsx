import Initial from '../RandomGifs';
import InitialGifsMock from 'constants/mocks/InitialGifsMock';

const App = ({}) => {
  return (
    <div className="App">
      <Initial gifs={InitialGifsMock} />
    </div>
  );
};

export default App;
