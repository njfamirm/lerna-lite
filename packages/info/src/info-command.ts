import { Command, logOutput, } from '@lerna-lite/core';
import envinfo from 'envinfo';

export function factory(argv) {
  return new InfoCommand(argv);
}

export class InfoCommand extends Command {
  /** command name */
  name = 'info';

  constructor(argv: any) {
    super(argv);
  }

  initialize() { }

  execute() {
    logOutput('\n Environment info:');
    envinfo
      .run({
        System: ['OS', 'CPU'],
        Binaries: ['Node', 'Yarn', 'npm'],
        Utilities: ['Git'],
        npmPackages: ['lerna'],
      })
      .then(logOutput);
  }
}