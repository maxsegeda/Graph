/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Composables
import { DefaultApolloClient } from "@vue/apollo-composable";

// Plugins
import vuetify from "./vuetify";
import { apolloClient } from "./apollo";

export function registerPlugins(app) {
  app.use(vuetify);
  app.provide(DefaultApolloClient, apolloClient);
}
