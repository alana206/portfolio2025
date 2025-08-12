"use strict";
exports.__esModule = true;
exports.metadata = void 0;
// app/layout.tsx
var link_1 = import("next/link");
import("./globals.css");
exports.metadata = {
  title: "Repo Board",
  description: "Your GitHub repos in a clean dark layout",
};
function RootLayout(_a) {
  var children = _a.children;
  return React.createElement(
    "html",
    { lang: "en", className: "dark" },
    React.createElement(
      "body",
      { className: "bg-base-bg text-base-text antialiased" },
      React.createElement(
        "div",
        { className: "mx-auto max-w-5xl px-4 py-10" },
        React.createElement(Header, null),
        React.createElement("main", { className: "mt-8" }, children),
        React.createElement(Footer, null)
      )
    )
  );
}
exports["default"] = RootLayout;
function Header() {
  return React.createElement(
    "header",
    { className: "flex items-center justify-between" },
    React.createElement(
      "div",
      { className: "flex items-center gap-3" },
      React.createElement("div", {
        className: "h-8 w-8 rounded-xl bg-white/5 ring-1 ring-white/10",
      }),
      React.createElement(
        "h1",
        { className: "text-lg font-semibold tracking-tight" },
        "Projects"
      )
    ),
    React.createElement(
      "nav",
      { className: "flex items-center gap-3 text-sm text-base-sub" },
      React.createElement(
        link_1["default"],
        {
          href: "/",
          className:
            "rounded-xl border border-base-border px-3 py-1.5 hover:bg-base-hover",
        },
        "GitHub"
      )
    )
  );
}
function Footer() {
  return React.createElement(
    "footer",
    {
      className:
        "mt-16 border-t border-base-border pt-6 text-center text-xs text-base-sub",
    },
    React.createElement("p", null, "Built with Next.js and Tailwind")
  );
}
