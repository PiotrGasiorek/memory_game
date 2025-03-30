import React from "react";

export const useStorage = <T,>(
  key: string,
  storage: Storage,
  initialValue: T
) => {
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    try {
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(
        `[useStorage] Error parsing stored value for key "${key}":`,
        error
      );
      return initialValue;
    }
  });

  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      storage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`[useStorage] Error setting value for key "${key}":`, error);
    }
  };

  const remove = () => {
    try {
      storage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.warn(
        `[useStorage] Error removing value for key "${key}":`,
        error
      );
    }
  };

  React.useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.storageArea === storage) {
        try {
          const newValue = event.newValue
            ? JSON.parse(event.newValue)
            : initialValue;
          setStoredValue(newValue);
        } catch (error) {
          console.warn(
            `[useStorage] Error parsing storage event value for key "${key}":`,
            error
          );
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, initialValue, storage]);

  return { value: storedValue, setValue, remove };
};
