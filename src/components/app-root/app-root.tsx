import { Component, h, State } from '@stencil/core';
import { myworker } from '../../my.worker';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @State() thing: string[] = [];
  private readonly interval = 'intervalId';

  componentWillLoad() {
    console.log('componentWillLoad');

    // const oldTimerId = window.sessionStorage.getItem(this.interval);
    // clearInterval(oldTimerId);
    const random = Math.random() * 1000;
    const newTimerId = setInterval(
      async random => {
        this.thing = await myworker(random);
      },
      250,
      random,
    );
    // console.log(`will load, old timer: ${oldTimerId}, new timer ${newTimerId}`);
    // window.sessionStorage.setItem(this.interval, newTimerId.toString());
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          {this.thing?.map(item => (
            <p>{item}</p>
          ))}
        </main>
      </div>
    );
  }
}
