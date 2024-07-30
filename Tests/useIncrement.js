import { useCallback, useState } from "react";

export function useIncrement({base = 0, max = Infinity, min = -Infinity} = {}) {
    const [state, setState] = useState(base);
    const increment = useCallback(() => setState((v) => Math.min(v + 1, max)), [max]);
    const decrement = useCallback(() => setState((v) => Math.max(v - 1, min)), [min]);
    return {state, increment, decrement};
}