interface Window {
    microFrontends?: Record<string, (container: HTMLElement) => Promise<() => void>>;
}
