import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Alert } from "./Alert";
import userEvent from "@testing-library/user-event";

describe("Alert", () => {
    it("should render corrently", () => {
        const { container } = render(<Alert type="danger"> Erreur </Alert>);
        expect(container.firstChild).toMatchInlineSnapshot(`
          <div
            class="alert alert-danger"
            role="alert"
          >
             Erreur 
            <button>
              Fermer
            </button>
          </div>
        `);
    });
    it("should close when clicking on the button", async () => {
        const { container } = render(<Alert type="danger"> Erreur </Alert>);
        await userEvent.click(screen.getByText("Fermer"));
        expect(container.firstChild).toMatchInlineSnapshot('null');
    });
});