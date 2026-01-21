import "./bootstrap";
import Search from "./live-search";
import Chat from "./chat";

// Initialize the live search feature
if (document.querySelector(".header-search-icon")) {
    new Search();
}

// Initialize the chat feature

if (document.querySelector(".header-chat-icon")) {
    new Chat();
}
