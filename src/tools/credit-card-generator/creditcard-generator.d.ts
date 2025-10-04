declare module 'creditcard-generator' {
    export const Schemes: Record<string, string>;
    export function GenCC(scheme: string, count: number): string[];
}