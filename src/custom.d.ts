declare module "*.svg" {
    import {AnyStyledComponent} from "styled-components";
    const value: string;
    export const ReactComponent: React.Component<React.SVGAttributes<SVGElement>> & AnyStyledComponent
    export default value
}

declare module "*.png" {
    const value: never;
    export default value;
}

declare module "*.jpg" {
    const value: never;
    export default value;
}

declare module "*.jpeg" {
    const value: never;
    export default value;
}

declare module "*.xml" {
    const value: never;
    export default value;
}

declare module "*.webmanifest" {
    const value: never;
    export default value;
}

declare module "*.eot" {
    const value: never;
    export default value;
}

declare module "*.ttf" {
    const value: never;
    export default value;
}

declare module "*.woff" {
    const value: never;
    export default value;
}
