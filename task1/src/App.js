import React, { Component } from 'react';
import './App.css';
import Films from './Components/Filmcards/filmcard'

class App extends Component {
  render() {
    return (
        <div className='App'>
            <Films name='Волк с Уолл-стрит' date='2013' img='https://st.kp.yandex.net/images/film_iphone/iphone360_462682.jpg'/>
            <Films name='Безумный Макс: Дорога ярости' date='2013' img='https://st.kp.yandex.net/images/film_iphone/iphone360_453406.jpg'/>
            <Films name='Тройной форсаж: Токийский дрифт' date='2006' img='https://st.kp.yandex.net/images/film_iphone/iphone360_106079.jpg'/>
        </div>
    );
  }
}

export default App;
