declare module "*.css";

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

declare module '*.mp3' {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const value: any;
  export = value;
}