import debugLib from 'debug';

const debug = (namespace: string) => {
  const debugInstance = debugLib(namespace);

  return (message: string, ...args: any[]) => {
    let functionName = 'anonymous';

    try {
      const stack = new Error().stack;

      if (stack) {
        const stackLines = stack.split('\n');

        // Try to extract the function name from the second line of the stack trace
        const match = stackLines[2]?.match(/at (\S+)/);
        if (match && match[1]) {
          functionName = match[1];
        }
      }
    } catch (e) {
      console.warn('Error parsing stack trace for function name:', e);
    }

    // Fallback in case function name extraction fails
    if (functionName === 'anonymous') {
      // Use a simple function name based on the line of code calling debug
      const caller = new Error().stack?.split('\n')[2]?.trim().split(' ')[1];
      if (caller) {
        functionName = caller;
      }
    }

    debugInstance(`[${functionName}] ${message}`, ...args);
  };
};

export default debug;
