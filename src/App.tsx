// App.tsx
import React, { Component } from 'react';
import Mycomponent from './Mycomponent';
import Counter from './Counter';
import './interfaces/index';

class MyPerson implements Person {
    name?: string | undefined;
    favoriteNumber?: number | undefined;

    constructor(name: string, favoriteNumber: number) {
        this.name = name;
        this.favoriteNumber = favoriteNumber;
    }
}

class App extends Component {
    render() {
        return <Counter number={0}></Counter>;
    }
}

export default App;
