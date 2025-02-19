findMiddleIndex() {
    if (this.isEmpty()) {
        return -1; // If the list is empty, return an invalid index
    }

    let slow = this.head;
    let fast = this.head;
    let index = 0;

    // Move fast by 2 steps and slow by 1 step while counting the index
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        index++;
    }

    return index; // The middle element's index
}
