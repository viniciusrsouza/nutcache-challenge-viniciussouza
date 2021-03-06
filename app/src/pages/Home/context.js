import { useState } from "react";

export function useHomeContext() {
  const [createDialog, setCreateDialog] = useState(false);

  return {
    createDialog,
    setCreateDialog,
  };
}
