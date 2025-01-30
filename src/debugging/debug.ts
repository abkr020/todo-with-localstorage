// debugging/debug.ts
import debugLib from 'debug';

// Base namespace for your application
const APP_NAMESPACE = 'app';

/**
 * Create a debug logger for a specific namespace.
 */
const createDebug = (namespace: string) => {
  const debugInstance = debugLib(namespace);

  return (message: string, ...args: any[]) => {
    let functionName = 'anonymous';
    let fileName = 'unknown';
    let folderName = 'unknown';

    try {
      const stack = new Error().stack;

      if (stack) {
        const stackLines = stack.split('\n');

        // Extract function name and file path from the stack trace
        const match = stackLines[2]?.match(/at (.+?) \((.+?):\d+:\d+\)/);
        if (match) {
          functionName = match[1];
          const filePath = match[2];

          // Extract file name and folder name using string manipulation
          const parts = filePath.split('/');
          fileName = parts.pop() || 'unknown';
          folderName = parts.pop() || 'unknown';
        }
      }
    } catch (e) {
      console.warn('Error parsing stack trace for function name:', e);
    }

    // Format the log with the function name, folder, and file name
    debugInstance(`[${folderName}/${fileName}:${functionName}] ${message}`, ...args);
  };
};

// Create a default log instance using the base namespace
const log = createDebug(APP_NAMESPACE);

// Export `log` for easy imports
export default log;
