function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function saveData() {
    const amount = document.getElementById('amount').value;
    const desc = document.getElementById('desc').value;
    // এখানে Firebase-এর ডাটা সেভ করার কোড বসবে
    alert("সেভ হয়েছে: " + desc + " - " + amount + " টাকা");
    document.getElementById('myModal').style.display = 'none';
}
