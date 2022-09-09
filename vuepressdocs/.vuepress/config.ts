import { defineConfig } from "vuepress/config";

export default defineConfig({
    title: "Orchestrator-app-sidebar",
    description: "This is the plugin documentation",
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Guide", link: "/guide/" },
            { text: "About", link: "/about/" }
        ],
        sidebar: {
            "/guide/": [
                "",
                "documentation.md",
                "SideBar.md",
            ],
            "/about/": "auto"
        }
    }
})
