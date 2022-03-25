import { createApp } from "vue";
import App from "./App.vue";
import TheAuthorComment from "./components/TheAuthorComment.vue";
import TheModal from "./components/TheModal.vue";
import 'aos/dist/aos.css'
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";


library.add(fas)


const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('the-author-comment', TheAuthorComment)

app.component('the-modal', TheModal)

app.mount("#app")

AOS.init()