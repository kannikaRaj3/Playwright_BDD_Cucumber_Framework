module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require src/StepDefinitions/**/*.ts',
    '--require src/hooks/**/*.ts',
    '--format progress-bar',
    'src/features/*.feature' 
  ].join(' ')
};