export interface Notifier {
  showErrorNotification(message: string): void;

  showSuccessNotification(message: string): void;
}
