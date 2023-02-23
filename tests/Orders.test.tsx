import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "whatwg-fetch";
import Orders from "../src/components/Orders/Orders";
import React from "react";

describe("Orders", () => {
  const mockOrders = [
    {
      orderNumber: "123",
      order: "Test order 1",
      date: "22/02/2023",
      orderer: "Test user",
      urgency: "STAT",
      orderUuid: "abc-123-def-456",
    },
    {
      orderNumber: "456",
      order: "Test order 2",
      date: "22/02/2023",
      orderer: "Test user",
      urgency: "Routine",
      orderUuid: "abc-123-def-890",
    },
  ];

  const server = setupServer(
    rest.get(
      "https://dev3.openmrs.org/openmrs/ws/rest/v1/order?patient=27c23a50-02b7-4e0b-b74c-6f58fecba080&v=full",
      (req, res, ctx) => {
        return res(ctx.json({ results: mockOrders }));
      }
    )
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("displays a loading message when data is not yet available", async () => {
    global.localStorage.setItem(
      "userInformation",
      JSON.stringify({ user: { privileges: [] } })
    );
    render(<Orders />);
    expect(screen.getByText(/loading/i)).toBeTruthy();
  });
});
