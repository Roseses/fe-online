module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended",
        // 告诉 ESLint 关闭与 Prettier 格式化规则冲突的任何规则，需写在最后，会覆盖前面的配置
        "plugin:prettier/recommended"
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue",
        // 将 Prettier 的格式化功能集成到 ESLint 中。会应用Prettier的配置
        "prettier"
    ],
    "rules": {
        // 自定义规则
    }
}
