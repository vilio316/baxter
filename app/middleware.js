export { default } from "next-auth/middleware";

export const config = { matcher: ["/stock"] }; // Protect the stock page
