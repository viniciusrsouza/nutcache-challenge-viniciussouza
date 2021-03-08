import { useCallback } from "react";
import { useDispatch } from "react-redux";

export function useAction(action) {
  const dispatch = useDispatch();
  return useCallback((payload) => dispatch(action(payload)), [
    dispatch,
    action,
  ]);
}
