export interface User {
    currentUser: any;
    error: boolean;
    signing: boolean;
    registration: { hasError: boolean, message: string };
}