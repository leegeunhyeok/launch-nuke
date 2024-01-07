import { launcher } from '../src';

const launch = launcher(() => console.log('💥 launched'));

console.log('👇 press the launch button 100 times');

for (let i = 0; i < 100; i++) {
  launch();
}
