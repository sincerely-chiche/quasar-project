import { QMarkdown } from '@quasar/quasar-ui-qmarkdown';
import { boot } from 'quasar/wrappers'
import '@quasar/quasar-ui-qmarkdown/src/QMarkdown.sass'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  app.component("QMarkdown", QMarkdown);
})
