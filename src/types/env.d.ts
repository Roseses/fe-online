export interface ImportMeta {
    readonly env: ImportMetaEnv
}

export interface  ImportMetaEnv {
    readonly VITE_BASE_API: string;
}
