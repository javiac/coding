const lastTimes: { [message: string]: number } = {};

/**
 * Log unique messages in a 10s window
 * message: Text message
 * time: timestamp in seconds
 */
export function uniquify(message: string, time: number) {
  const lastTime = lastTimes[message];
  let output: string = '';
  if (lastTime) {
    if (time - lastTime > 10) {
      output = message;
    }
  } else {
    output = message;
  }

  if (output) {
    lastTimes[message] = time;
  }

  return output;
}
