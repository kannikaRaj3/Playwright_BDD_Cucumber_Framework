module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require src/util/world.ts',
    '--require src/StepDefinitions/**/*.ts',
    '--require src/util/hooks.ts',
    '--format progress-bar',
    'src/features/*.feature' 
  ].join(' ')
};