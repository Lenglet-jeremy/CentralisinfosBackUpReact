import {describe, expect, it} from "vitest";
import { useIncrement } from "./useIncrement";
import { renderHook } from "@testing-library/react";
import { act } from "react";

describe("useIncrement", () => {
    it("should use the default value", () => {
        const { result } = renderHook(() => useIncrement({base: 5}));
        expect(result.current.state).toBe(5);
    });
    it("should increment value", () => {
        const { result } = renderHook(() => useIncrement({base: 5}));
        act(() => {
            result.current.increment();
        });
        expect(result.current.state).toBe(6);
    });
    it("should not bypass max", () => {
        const { result } = renderHook(() => useIncrement({base: 5, max: 7}));
        act(() => { result.current.increment(); });
        act(() => { result.current.increment(); });
        act(() => { result.current.increment(); });
        act(() => { result.current.increment(); });
        act(() => { result.current.increment(); });
        expect(result.current.state).toBe(7);
    });
});