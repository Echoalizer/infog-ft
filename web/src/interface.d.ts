export interface IElectronAPI {
    openFileBrowser: () => void,
}

declare global {
    interface Window {
        ElectronAPI: IElectronAPI
    }
}