import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import registerComponents from "@/components";


const app = createApp(App)

registerComponents(app)

app.use(router).mount('#app');
