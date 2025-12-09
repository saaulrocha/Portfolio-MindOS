import { atom, map } from 'nanostores';

export type WindowState = {
    id: string;
    title: string;
    component: string; // ID of the component to render, e.g., 'Calculator', 'About'
    x: number;
    y: number;
    width: number;
    height: number;
    zIndex: number;
    isMinimized: boolean;
    isMaximized: boolean;
};

export type OSState = {
    isLocked: boolean;
    isBooting: boolean;
    theme: 'dark' | 'light' | 'cyberpunk';
    volume: number;
    brightness: number;
};

// Initial State
export const osState = map<OSState>({
    isLocked: true,
    isBooting: true,
    theme: 'dark',
    volume: 80,
    brightness: 100,
});

// Windows Store
export const windows = map<Record<string, WindowState>>({});
export const activeWindowId = atom<string | null>(null);
export const zIndexCounter = atom<number>(100);

// Actions
export const setLocked = (locked: boolean) => osState.setKey('isLocked', locked);
export const setBooting = (booting: boolean) => osState.setKey('isBooting', booting);

export const openWindow = (id: string, title: string, component: string, initialConfig?: Partial<WindowState>) => {
    const currentWindows = windows.get();

    if (currentWindows[id]) {
        // Bring to front if already open
        focusWindow(id);
        if (currentWindows[id].isMinimized) {
            windows.setKey(id, { ...currentWindows[id], isMinimized: false });
        }
        return;
    }

    const z = zIndexCounter.get() + 1;
    zIndexCounter.set(z);

    // Random position for new window to avoid perfect stacking
    const randomOffset = Math.floor(Math.random() * 40);

    windows.setKey(id, {
        id,
        title,
        component,
        x: 100 + randomOffset,
        y: 100 + randomOffset,
        width: 800,
        height: 600,
        zIndex: z,
        isMinimized: false,
        isMaximized: false,
        ...initialConfig
    });

    activeWindowId.set(id);
};

export const closeWindow = (id: string) => {
    const currentWindows = { ...windows.get() };
    delete currentWindows[id];
    windows.set(currentWindows);
    activeWindowId.set(null); // Simple reset, could find next top window
};

export const focusWindow = (id: string) => {
    const z = zIndexCounter.get() + 1;
    zIndexCounter.set(z);

    const win = windows.get()[id];
    if (win) {
        windows.setKey(id, { ...win, zIndex: z });
        activeWindowId.set(id);
    }
};

export const updateWindowPosition = (id: string, x: number, y: number) => {
    const win = windows.get()[id];
    if (win) {
        windows.setKey(id, { ...win, x, y });
    }
};

export const updateWindowSize = (id: string, width: number, height: number) => {
    const win = windows.get()[id];
    if (win) {
        windows.setKey(id, { ...win, width, height });
    }
};
