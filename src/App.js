import Reacr from 'react';

const ItemList = () => (<ul>
  <li>Помидоры</li>
  <li>Огурцы</li>
  <li>Лук</li>
</ul>);

const App = () => (<div>
  <h3>Список покупок:</h3>
  <ItemList />
</div>);

export default App;
