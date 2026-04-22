declare namespace React {
    type ReactNode = any;

    interface FC<P = {}> {
        (props: P): ReactNode;
    }

    interface StrictModeProps {
        children?: ReactNode;
    }

    const StrictMode: FC<StrictModeProps>;

    function useState<S>(initialState: S | (() => S)): [S, (value: S) => void];
}

declare module 'react' {
    export default React;
    export const useState: typeof React.useState;
    export const StrictMode: typeof React.StrictMode;
    export type FC<P = {}> = React.FC<P>;
}

declare module 'react-dom' {
    function render(element: any, container: Element | DocumentFragment | null): void;
    const ReactDOM: {
        render: typeof render;
    };
    export default ReactDOM;
}

declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
}
