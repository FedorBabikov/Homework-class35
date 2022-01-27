'use strict';
/*------------------------------------------------------------------------------
Full description atL https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week4#exercise-2-whats-your-monday-worth

- Complete the function names `computeEarnings`. It should take an array of
  tasks and an hourly rate as arguments and return a formatted Euro amount
  (e.g: `€11.34`) comprising the total earnings.
- Use the `map` array function to take out the duration time for each task.
- Multiply each duration by a hourly rate for billing and sum it all up.
- Make sure the program can be used on any array of objects that contain a
  `duration` property with a number value.
------------------------------------------------------------------------------*/
const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const hourlyRate = 25;

function computeEarnings(tasks, rate) {
  // first: check if the passed arguments are an array and a number. If not - log a message.
  if (!Array.isArray(tasks) || typeof rate !== 'number') {
    return 'computeEarnings: passed arguments are not an array and a number.';
  }
  // then: check if every 'duration' prop is a string. If yes - parse it.
  for (const task of tasks) {
    if (typeof task.duration === 'string') {
      const parseResult = parseInt(task.duration, 10);
      task.duration = parseResult ? parseResult : 0; // if valid number - store it in tasks, if NAN - store zero.
    }
  }
  // main job: chain map (with destructuring) + reduce on the passed arr.
  // take out all the durations -> multiply each by the rate -> sum it all up in reduce.
  const euroAmount = tasks
    .map(({ duration }) => {
      return (duration / 60) * rate;
    })
    .reduce((prev, next) => {
      return prev + next;
    });
  // -return a formatted Euro amount using toFixed() on the sum.
  return `€${euroAmount.toFixed(2)}`;
}

// ! Unit tests (using Jest)
describe('computeEarnings', () => {
  test('should take two parameters', () => {
    // The `.length` property indicates the number of parameters expected by
    // the function.
    expect(computeEarnings).toHaveLength(2);
  });

  test('should compute the earnings as a formatted Euro amount', () => {
    const result = computeEarnings(mondayTasks, hourlyRate);
    const expected = '€187.50';
    expect(result).toBe(expected);
  });
});
