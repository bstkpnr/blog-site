export default function ToText(node: string): string {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
}
