export default function (api, options = {}) {
  const { content = "", src = "" } = options;
  if (typeof content !== "string" || typeof src !== "string")
    throw new TypeError("content and src must be string");
  api.addHTMLScript({
    content,
    src
  });
}
