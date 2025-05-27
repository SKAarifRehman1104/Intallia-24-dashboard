import { useState } from 'react';

interface Toast {
  id: number;
  title: string;
  description: string;
  variant?: string;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = ({ title, description, variant }: Omit<Toast, 'id'>) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, description, variant }]);

    // Automatically remove toast after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return { toast, toasts };
};
