export function handleDragStart(event: React.DragEvent<HTMLDivElement>): void {
    const target = event.currentTarget;
    event.dataTransfer.setData('text/plain', target.innerText);
}
